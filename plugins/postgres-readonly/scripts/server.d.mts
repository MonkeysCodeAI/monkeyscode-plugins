/** Structured, import-safe PostgreSQL MCP server contracts. */
export const MAX_LINE: number;
export interface ValidatedArguments { schema: 'public' | 'pg_catalog'; table?: string; limit: number }
export interface HandlerConfiguration { role: string }
export interface VerifiedConfiguration extends HandlerConfiguration { path: string; env: Record<string, string> }
export type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };
export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: { type: string; properties: Record<string, { type: string; enum?: string[]; pattern?: string; minimum?: number; maximum?: number }>; required: string[]; additionalProperties: boolean };
}
export interface InitializeResult { protocolVersion: string; capabilities: { tools: Record<string, never> }; serverInfo: { name: string; version: string } }
export interface ToolsResult { tools: ToolDefinition[] }
export interface CallResult { content: Array<{ type: 'text'; text: string }>; isError?: boolean }
export interface RpcError { code: number; message: string }
export type RpcResponse = { jsonrpc: string; id: string | number | null; error: RpcError; result?: never } | { jsonrpc: string; id: string | number; result: InitializeResult | ToolsResult | CallResult | Record<string, never>; error?: never };
export type QueryRunner<C extends HandlerConfiguration> = (config: C, sql: string) => Promise<JsonValue[]>;
export function validateArguments(name: string, args: unknown): ValidatedArguments;
export function buildSql(name: string, input: unknown, role: string): string;
export function verifiedConfiguration(source?: Record<string, string | undefined>): VerifiedConfiguration;
export function execute(config: VerifiedConfiguration, sql: string): Promise<JsonValue[]>;
export function createHandler(config: VerifiedConfiguration): (request: unknown) => Promise<RpcResponse | null>;
export function createHandler<C extends HandlerConfiguration>(config: C, run: QueryRunner<C>): (request: unknown) => Promise<RpcResponse | null>;
export function start(): void;
