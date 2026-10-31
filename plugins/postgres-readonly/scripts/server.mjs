#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, realpathSync, statSync } from 'node:fs';
import { isAbsolute, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

export const MAX_LINE = 8192;
const MAX_OUTPUT = 65536;
const IDENTIFIER = /^[a-z_][a-z0-9_]{0,62}$(?![\s\S])/;
const SCHEMAS = new Set(['public', 'pg_catalog']);
const TOOLS = [
  { name: 'list_tables', description: 'List ordinary tables in public or pg_catalog.', inputSchema: { type: 'object', properties: { schema: { type: 'string', enum: [...SCHEMAS] } }, required: ['schema'], additionalProperties: false } },
  { name: 'describe_table', description: 'Inspect column metadata of an ordinary table.', inputSchema: { type: 'object', properties: { schema: { type: 'string', enum: [...SCHEMAS] }, table: { type: 'string', pattern: IDENTIFIER.source } }, required: ['schema', 'table'], additionalProperties: false } },
  { name: 'sample_rows', description: 'Sample at most 100 rows from an ordinary public table with no RLS and only supported built-in scalar types. No views, foreign tables or arbitrary SQL.', inputSchema: { type: 'object', properties: { schema: { type: 'string', enum: ['public'] }, table: { type: 'string', pattern: IDENTIFIER.source }, limit: { type: 'integer', minimum: 1, maximum: 100 } }, required: ['schema', 'table'], additionalProperties: false } },
];
export function validateArguments(name, args) {
  if (!TOOLS.some(t => t.name === name) || !args || Array.isArray(args) || typeof args !== 'object') throw new Error('Invalid tool arguments');
  const keys = name === 'list_tables' ? ['schema'] : name === 'sample_rows' ? ['schema', 'table', 'limit'] : ['schema', 'table'];
  if (Object.keys(args).some(k => !keys.includes(k)) || !SCHEMAS.has(args.schema)) throw new Error('Invalid tool arguments');
  if (name !== 'list_tables' && (typeof args.table !== 'string' || !IDENTIFIER.test(args.table))) throw new Error('Invalid table identifier');
  if (name === 'sample_rows' && (args.schema !== 'public' || (args.limit !== undefined && (!Number.isInteger(args.limit) || args.limit < 1 || args.limit > 100)))) throw new Error('Invalid sample bounds');
  return { ...args, limit: args.limit ?? 10 };
}
const literal = value => "'" + value.replaceAll("'", "''") + "'";
const quoted = value => '"' + value.replaceAll('"', '""') + '"';
export function buildSql(name, input, role) {
  const args = validateArguments(name, input);
  if (!IDENTIFIER.test(role)) throw new Error('Invalid configured role');
  const schema = literal(args.schema), table = literal(args.table ?? '');
  // These checks concern effective privileges, not merely the session read-only flag.
  const guard = `BEGIN READ ONLY;
DO $guard$ BEGIN
IF current_user <> ${literal(role)} OR current_setting('transaction_read_only') <> 'on'
 OR EXISTS (SELECT 1 FROM pg_roles WHERE rolname = current_user AND (rolsuper OR rolcreaterole OR rolcreatedb OR rolreplication OR rolbypassrls))
 OR has_database_privilege(current_user, current_database(), 'CREATE')
 OR has_database_privilege(current_user, current_database(), 'TEMP')
 OR EXISTS (SELECT 1 FROM pg_namespace WHERE nspname !~ '^pg_temp_' AND nspname !~ '^pg_toast_temp_' AND has_schema_privilege(current_user, oid, 'CREATE'))
 OR EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace WHERE n.nspname NOT IN ('pg_catalog','information_schema') AND n.nspname !~ '^pg_toast' AND c.relkind IN ('r','p','v','m','f') AND (has_table_privilege(current_user, c.oid, 'INSERT,UPDATE,DELETE,TRUNCATE,TRIGGER,REFERENCES') OR has_any_column_privilege(current_user, c.oid, 'INSERT,UPDATE,REFERENCES')))
 OR EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace WHERE n.nspname NOT IN ('pg_catalog','information_schema') AND c.relkind = 'S' AND has_sequence_privilege(current_user, c.oid, 'USAGE,UPDATE'))
THEN RAISE EXCEPTION 'security guard rejected'; END IF;
END $guard$;
`;
  const match = `n.nspname = ${schema} AND c.relname = ${table} AND c.relkind = 'r'`;
  let query;
  if (name === 'list_tables') query = `SELECT COALESCE(json_agg(x), '[]'::json) FROM (SELECT c.relname AS table_name FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname=${schema} AND c.relkind='r' AND has_table_privilege(current_user,c.oid,'SELECT') ORDER BY c.relname LIMIT 100) x;`;
  else if (name === 'describe_table') query = `SELECT COALESCE(json_agg(x), '[]'::json) FROM (SELECT a.attname AS column_name, t.typname AS type_name, a.attnotnull AS not_null FROM pg_attribute a JOIN pg_class c ON c.oid=a.attrelid JOIN pg_namespace n ON n.oid=c.relnamespace JOIN pg_type t ON t.oid=a.atttypid WHERE ${match} AND has_table_privilege(current_user,c.oid,'SELECT') AND a.attnum>0 AND NOT a.attisdropped ORDER BY a.attnum LIMIT 100) x;`;
  else query = `LOCK TABLE ONLY ${quoted(args.schema)}.${quoted(args.table)} IN ACCESS SHARE MODE;
DO $table$ BEGIN
IF NOT EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE ${match} AND NOT c.relrowsecurity AND has_table_privilege(current_user,c.oid,'SELECT')
 AND NOT EXISTS (SELECT 1 FROM pg_attribute a JOIN pg_type t ON t.oid=a.atttypid JOIN pg_namespace tn ON tn.oid=t.typnamespace WHERE a.attrelid=c.oid AND a.attnum>0 AND NOT a.attisdropped AND (tn.nspname <> 'pg_catalog' OR t.typname NOT IN ('bool','int2','int4','int8','float4','float8','numeric','text','varchar','bpchar','date','timestamp','timestamptz','time','timetz','interval','uuid','json','jsonb','bytea'))))
THEN RAISE EXCEPTION 'table guard rejected'; END IF;
END $table$;
SELECT COALESCE(json_agg(x), '[]'::json) FROM (SELECT * FROM ONLY ${quoted(args.schema)}.${quoted(args.table)} LIMIT ${args.limit}) x;`;
  return guard + query + '\nCOMMIT;\n';
}

export function verifiedConfiguration(source = process.env) {
  const path = source.MONKEYSCODE_PSQL_PATH;
  const hash = source.MONKEYSCODE_PSQL_SHA256;
  if (!path || !isAbsolute(path) || !/^[a-fA-F0-9]{64}$/.test(hash ?? '') || !IDENTIFIER.test(source.PGUSER ?? '')) throw new Error('Configuration unavailable');
  const resolved = realpathSync(path);
  const stat = statSync(resolved);
  if (!stat.isFile() || !(stat.mode & 0o111) || (stat.mode & 0o022)) throw new Error('Binary permissions rejected');
  for (let dir = dirname(resolved); ; dir = dirname(dir)) {
    if (statSync(dir).mode & 0o022) throw new Error('Binary directory permissions rejected');
    if (dirname(dir) === dir) break;
  }
  if (createHash('sha256').update(readFileSync(resolved)).digest('hex') !== hash.toLowerCase()) throw new Error('Binary digest rejected');
  if (!source.PGHOST || !source.PGDATABASE || !source.PGPORT || !/^\d{1,5}$/.test(source.PGPORT) || Number(source.PGPORT) < 1 || Number(source.PGPORT) > 65535) throw new Error('Connection configuration unavailable');
  const env = {};
  for (const key of ['PGHOST','PGPORT','PGDATABASE','PGUSER','PGPASSWORD','PGPASSFILE','PGSSLROOTCERT']) if (source[key] !== undefined) env[key] = source[key];
  env.PGSSLMODE = 'verify-full';
  env.PGCONNECT_TIMEOUT = '3';
  env.PGOPTIONS = '-c default_transaction_read_only=on -c statement_timeout=5000 -c idle_in_transaction_session_timeout=5000 -c lock_timeout=1000 -c search_path=pg_catalog';
  return { path: resolved, env, role: source.PGUSER };
}
export function execute(config, sql) {
  return new Promise((resolve, reject) => {
    const child = spawn(config.path, ['--no-psqlrc', '-w', '-X', '-q', '-A', '-t', '--set=ON_ERROR_STOP=1', '--file=-'], { env: config.env, stdio: ['pipe','pipe','pipe'], shell: false });
    let output = '', bytes = 0, done = false;
    const fail = () => { if (!done) { done = true; clearTimeout(timer); child.kill('SIGKILL'); reject(new Error('Database request rejected or unavailable')); } };
    const timer = setTimeout(fail, 6000);
    child.on('error', fail);
    child.stdin.on('error', fail);
    child.stdout.on('data', chunk => { bytes += chunk.length; if (bytes > MAX_OUTPUT) fail(); else output += chunk.toString('utf8'); });
    child.stderr.on('data', chunk => { bytes += chunk.length; if (bytes > MAX_OUTPUT) fail(); });
    child.on('close', code => {
      if (done) return;
      if (code !== 0) return fail();
      try { const result = JSON.parse(output.trim()); if (!Array.isArray(result)) return fail(); done = true; clearTimeout(timer); resolve(result); } catch { fail(); }
    });
    child.stdin.end(sql);
  });
}
export function createHandler(config, run = execute) {
  let initialized = false;
  return async request => {
    const id = request?.id;
    const error = (code, message) => ({ jsonrpc: '2.0', id: id ?? null, error: { code, message } });
    if (!request || request.jsonrpc !== '2.0' || typeof request.method !== 'string' || (id !== undefined && typeof id !== 'string' && !Number.isSafeInteger(id))) return error(-32600, 'Invalid request');
    if (id === undefined) return null;
    if (request.method === 'initialize') {
      if (!['2024-11-05','2025-03-26'].includes(request.params?.protocolVersion)) return error(-32602, 'Unsupported protocol version');
      initialized = true;
      return { jsonrpc: '2.0', id, result: { protocolVersion: request.params.protocolVersion, capabilities: { tools: {} }, serverInfo: { name: 'monkeyscode-postgres-readonly', version: '1.1.0' } } };
    }
    if (!initialized) return error(-32000, 'Initialize first');
    if (request.method === 'ping') return { jsonrpc: '2.0', id, result: {} };
    if (request.method === 'tools/list') return { jsonrpc: '2.0', id, result: { tools: TOOLS } };
    if (request.method !== 'tools/call') return error(-32601, 'Method not found');
    try {
      const sql = buildSql(request.params?.name, request.params?.arguments, config.role);
      const data = await run(config, sql);
      return { jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: JSON.stringify(data) }] } };
    } catch {
      return { jsonrpc: '2.0', id, result: { isError: true, content: [{ type: 'text', text: 'Request rejected: invalid arguments, security guard failure, or database unavailable.' }] } };
    }
  };
}
export function start() {
  let config;
  try { config = verifiedConfiguration(); } catch { process.stderr.write('PostgreSQL connector unavailable: verify local binary and connection configuration.\n'); process.exitCode = 1; return; }
  const handle = createHandler(config);
  let pending = Buffer.alloc(0), busy = false;
  const send = response => { if (response) process.stdout.write(JSON.stringify(response) + '\n'); };
  process.stdin.on('data', async chunk => {
    pending = Buffer.concat([pending, chunk]);
    if (pending.length > MAX_LINE || busy) { process.stderr.write('Input limit exceeded.\n'); process.exit(1); }
    const newline = pending.indexOf(10);
    if (newline < 0) return;
    if (newline !== pending.length - 1) { process.stderr.write('Only one outstanding message is supported.\n'); process.exit(1); }
    const line = pending.subarray(0, newline).toString('utf8'); pending = Buffer.alloc(0); busy = true;
    try { send(await handle(JSON.parse(line))); } catch { send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }); }
    busy = false;
  });
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) start();
