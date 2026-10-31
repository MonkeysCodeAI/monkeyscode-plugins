#!/usr/bin/env node
// No dependencies, package installation, archive extraction, or plugin execution.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import { pathToFileURL } from 'node:url';
export const sha256 = value => createHash('sha256').update(value).digest('hex');
export const SOURCE_COMMIT = '24e066886604a55e55f4f5002bae044e5d400968';
const RELEASE = 'https://github.com/MonkeysCodeAI/monkeyscode-plugins/releases/download/first-party-preview-20261031/';
const MAX = 50 * 1024 * 1024;
export function safeArchivePath(name) {
  if (!name || Buffer.byteLength(name) > 255 || /[\\\x00-\x1f\x7f:]/.test(name) || name.startsWith('/') || name.split('/').some(x => !x || x === '.' || x === '..') || name.split('/').length > 32) throw new Error('Unsafe archive path');
  return name;
}
export function archiveManifest(bytes, declaredPath) {
  const tar = gunzipSync(bytes, { maxOutputLength: 60 * 1024 * 1024 });
  const seen = new Set(), manifests = new Map(); let offset = 0;
  const text = b => b.toString('utf8').replace(/\0.*$/s, '');
  const octal = b => { const s = text(b).trim(); if (!/^[0-7]+$/.test(s)) throw new Error('Invalid tar number'); return parseInt(s, 8); };
  while (offset + 512 <= tar.length) {
    const h = tar.subarray(offset, offset + 512);
    if (h.every(b => b === 0)) break;
    if (seen.size >= 5000 || text(h.subarray(257, 263)) !== 'ustar') throw new Error('Invalid ustar');
    let sum = 0; for (let i = 0; i < 512; i++) sum += i >= 148 && i < 156 ? 32 : h[i];
    if (sum !== octal(h.subarray(148, 156))) throw new Error('Invalid tar checksum');
    const prefix = text(h.subarray(345, 500));
    let name = text(h.subarray(0, 100)); if (prefix) name = `${prefix}/${name}`;
    const type = h[156]; if (![0, 48, 53].includes(type) || text(h.subarray(157, 257))) throw new Error('Links or special entries forbidden');
    if (type === 53 && name.endsWith('/')) name = name.slice(0, -1);
    safeArchivePath(name); if (seen.has(name)) throw new Error('Duplicate entry'); seen.add(name);
    const size = octal(h.subarray(124, 136));
    if (!Number.isSafeInteger(size) || size > MAX || type === 53 && size !== 0 || offset + 512 + Math.ceil(size / 512) * 512 > tar.length) throw new Error('Invalid tar bounds');
    if (name === 'plugin.json' || name === '.claude-plugin/plugin.json') {
      if (type === 53 || size > 262144) throw new Error('Invalid manifest');
      manifests.set(name, JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(tar.subarray(offset + 512, offset + 512 + size))));
    }
    offset += 512 + Math.ceil(size / 512) * 512;
  }
  if (offset + 1024 > tar.length || !tar.subarray(offset).every(b => b === 0) || manifests.size !== 1) throw new Error('Invalid archive termination or manifest count');
  const manifestPath = declaredPath ? safeArchivePath(declaredPath) : [...manifests.keys()][0];
  if (!manifests.has(manifestPath)) throw new Error('Manifest missing');
  return { manifestPath, manifest: manifests.get(manifestPath) };
}
async function responseBytes(response, limit) {
  const chunks = []; let size = 0;
  for await (const chunk of response.body ?? []) { size += chunk.length; if (size > limit) throw new Error('Response budget exceeded'); chunks.push(Buffer.from(chunk)); }
  return Buffer.concat(chunks);
}
export async function request(url, options = {}, transport = fetch) {
  const response = await transport(url, { ...options, redirect: 'error', signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error('Remote request failed');
  const bytes = await responseBytes(response, 1048576); return bytes.length ? JSON.parse(bytes.toString('utf8')) : {};
}
export async function downloadArchive(name, transport = fetch) {
  let url = new URL(RELEASE + name);
  for (let i = 0; i < 5; i++) {
    if (url.protocol !== 'https:' || url.port || url.username || url.password || url.hash || !['github.com', 'release-assets.githubusercontent.com'].includes(url.hostname)) throw new Error('Unsafe release URL');
    const r = await transport(url, { redirect: 'manual', signal: AbortSignal.timeout(120000) });
    if ([301, 302, 303, 307, 308].includes(r.status)) { const location = r.headers.get('location'); if (!location) throw new Error('Missing redirect'); await r.body?.cancel(); url = new URL(location, url); continue; }
    if (!r.ok) throw new Error('Release download failed'); return responseBytes(r, MAX);
  }
  throw new Error('Too many redirects');
}
export function oidcRequestUrl(value, audience) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.port || url.username || url.password || url.hash || !/^(?:[a-z0-9-]+\.)*actions\.githubusercontent\.com$/.test(url.hostname) || !/^\/[A-Za-z0-9_./-]+$/.test(url.pathname)) throw new Error('Untrusted OIDC endpoint');
  url.searchParams.set('audience', audience); return url;
}
export function uploadUrl(grant, host, size, now = Date.now()) {
  const url = new URL(grant?.url), maximum = grant.maximumBytes ?? grant.maxBytes;
  const expiry = Date.parse(url.searchParams.get('se')), keys = [...url.searchParams.keys()];
  if (!/^[a-z0-9]{3,24}\.blob\.core\.windows\.net$/.test(host ?? '') || url.hostname !== host || url.protocol !== 'https:' || url.port || url.username || url.password || url.hash || !/^\/[a-z0-9-]{3,63}\/quarantine\/[a-f0-9]{48}\/archive$/.test(url.pathname) || grant.method !== 'PUT' || JSON.stringify(Object.keys(grant.headers ?? {}).sort()) !== JSON.stringify(['If-None-Match', 'x-ms-blob-type']) || grant.headers['If-None-Match'] !== '*' || grant.headers['x-ms-blob-type'] !== 'BlockBlob' || !Number.isSafeInteger(maximum) || size < 1 || size > maximum || maximum > MAX || new Set(keys).size !== keys.length || url.searchParams.get('sp') !== 'c' || url.searchParams.get('sr') !== 'b' || url.searchParams.get('spr') !== 'https' || !url.searchParams.get('sig') || !url.searchParams.get('skoid') || !url.searchParams.get('sktid') || !Number.isFinite(expiry) || expiry <= now + 30000 || expiry > now + 900000 || grant.expiresAt && Date.parse(grant.expiresAt) !== expiry) throw new Error('Unsafe upload grant');
  return url;
}
export async function publish(env = process.env, { transport = fetch, now = Date.now, sleep = ms => new Promise(r => setTimeout(r, ms)) } = {}) {
  const central = 'https://api.monkeyscode.com', plugin = env.PLUGIN_ID;
  if (env.MARKETPLACE_CI_ENABLED !== 'true' || env.MARKETPLACE_CI_ORIGIN !== central || !env.MARKETPLACE_CI_AUDIENCE || !/^\d+$/.test(env.GITHUB_REPOSITORY_ID ?? '') || !/^[a-f0-9]{40}$/.test(env.GITHUB_SHA ?? '') || env.GITHUB_EVENT_NAME !== 'workflow_dispatch' || env.GITHUB_WORKFLOW_REF !== env.MARKETPLACE_CI_WORKFLOW_REF || !env.GITHUB_WORKFLOW_REF?.startsWith(`${env.GITHUB_REPOSITORY}/.github/workflows/publish.yml@refs/`) || !env.GITHUB_REF?.startsWith('refs/')) throw new Error('Enabled immutable CI binding required');
  const catalog = JSON.parse(await readFile(new URL('../catalog.json', import.meta.url), 'utf8'));
  const preview = JSON.parse(await readFile(new URL('../preview-manifest.json', import.meta.url), 'utf8'));
  const selected = catalog.plugins.filter(p => p.id === plugin);
  const releases = preview.plugins.filter(p => p.plugin === plugin);
  if (selected.length !== 1 || releases.length !== 1 || !/^MonkeysCode\/[a-z0-9-]+$/.test(plugin ?? '') || selected[0].rights?.firstParty !== true || preview.sourceCommit !== SOURCE_COMMIT || preview.status !== 'unsigned-preview') throw new Error('Unknown pinned release');
  const release = releases[0], name = plugin.split('/')[1];
  if (release.sourceCommit !== SOURCE_COMMIT || release.status !== 'unsigned-preview' || release.marketplaceApproved !== false || release.version !== selected[0].version || !/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(release.version) || release.archive !== `${name}-${release.version}.tar.gz` || !/^[a-f0-9]{64}$/.test(release.archiveDigest) || !/^[a-f0-9]{64}$/.test(release.contentHash) || !Number.isSafeInteger(release.sizeBytes) || release.sizeBytes < 1 || release.sizeBytes > MAX) throw new Error('Invalid release metadata');
  const bytes = await downloadArchive(release.archive, transport);
  if (bytes.length !== release.sizeBytes || sha256(bytes) !== release.archiveDigest) throw new Error('Release digest mismatch');
  // contentHash is pinned preview metadata, not a claimed local recomputation.
  // Central completion must independently hash the uploaded bytes and kernel content.
  const metadata = archiveManifest(bytes, release.manifestPath);
  if (metadata.manifest.name !== name || metadata.manifest.version !== release.version) throw new Error('Manifest identity mismatch');
  const operation = Object.freeze({ packageId: plugin, version: release.version, archiveDigest: release.archiveDigest, contentHash: release.contentHash, sizeBytes: bytes.length });
  const operationId = sha256(JSON.stringify([env.GITHUB_REPOSITORY_ID, env.GITHUB_SHA, plugin, release.version, release.archiveDigest, release.contentHash, bytes.length]));
  let token, refreshed = -Infinity; const seen = new Set();
  async function refresh() {
    if (now() - refreshed < 120000) throw new Error('Refresh throttled');
    const bearer = env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
    if (!bearer || /[\r\n]/.test(bearer)) throw new Error('Runner OIDC missing');
    const oidc = await request(oidcRequestUrl(env.ACTIONS_ID_TOKEN_REQUEST_URL, env.MARKETPLACE_CI_AUDIENCE), { headers: { Authorization: `Bearer ${bearer}` } }, transport);
    if (typeof oidc.value !== 'string' || oidc.value.split('.').length !== 3 || /[\r\n]/.test(oidc.value)) throw new Error('Invalid assertion');
    const c = JSON.parse(Buffer.from(oidc.value.split('.')[1], 'base64url').toString('utf8'));
    // These are fail-closed consistency checks, NOT cryptographic verification.
    // Central exchange must verify signature, issuer, audience, immutable workflow binding and nonce.
    if (c.iss !== 'https://token.actions.githubusercontent.com' || c.aud !== env.MARKETPLACE_CI_AUDIENCE || c.repository_id !== env.GITHUB_REPOSITORY_ID || c.repository !== env.GITHUB_REPOSITORY || c.sha !== env.GITHUB_SHA || c.ref !== env.GITHUB_REF || c.workflow_ref !== env.GITHUB_WORKFLOW_REF || c.environment !== 'first-party-plugin-release' || c.event_name !== 'workflow_dispatch' || !Number.isFinite(c.exp) || c.exp * 1000 <= now() || typeof c.jti !== 'string' || !c.jti || seen.has(c.jti)) throw new Error('OIDC binding mismatch');
    seen.add(c.jti);
    const exchanged = await request(`${central}/v1/marketplace/ci/exchange`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${oidc.value}` }, body: JSON.stringify(operation) }, transport);
    token = exchanged.publishToken;
    if (typeof token !== 'string' || !token || /[\r\n]/.test(token) || exchanged.expiresIn !== 300) throw new Error('Exchange failed'); refreshed = now();
  }
  async function call(stage, payload) {
    if (!token || now() - refreshed >= 120000) await refresh();
    return request(`${central}/v1/marketplace/ci/${stage}`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ operation, payload }) }, transport);
  }
  let state = await call('status', { operationId });
  if (state.status === 'not-found') { await call('register', metadata); state = await call('reserve', { operationId }); }
  const reservationId = state.reservationId;
  if (!/^[a-f0-9]{48}$/.test(reservationId ?? '')) throw new Error('Invalid reservation');
  if (state.status === 'reserved') {
    if (!state.upload) state = await call('reserve', { operationId });
    if (state.reservationId !== reservationId) throw new Error('Reservation changed');
    const url = uploadUrl(state.upload, env.MARKETPLACE_QUARANTINE_HOST, bytes.length, now());
    const uploaded = await transport(url, { method: 'PUT', redirect: 'error', signal: AbortSignal.timeout(120000), headers: { ...state.upload.headers, 'Content-Type': 'application/gzip', 'Content-Length': String(bytes.length), 'x-ms-meta-sha256': release.archiveDigest }, body: bytes });
    if (![201, 412].includes(uploaded.status)) throw new Error('Upload failed');
    state = await call('complete', { operationId, reservationId, archiveDigest: release.archiveDigest, sizeBytes: bytes.length });
  }
  const deadline = now() + 600000;
  while (!['approved', 'pending-review', 'failed'].includes(state.status) && now() < deadline) {
    if (!['uploaded', 'scanning', 'processing'].includes(state.status)) throw new Error('Unknown publication state');
    await sleep(10000); state = await call('status', { operationId });
  }
  const result = { sourceCommit: SOURCE_COMMIT, ...operation, operationId, reservationId, status: state.status, marketplaceApproved: state.status === 'approved' };
  await writeFile('publication.json', JSON.stringify(result, null, 2) + '\n');
  if (!['approved', 'pending-review'].includes(state.status)) throw new Error('Publication incomplete');
  return result;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  publish().then(r => console.log(JSON.stringify(r))).catch(() => { console.error('Publication stopped (credentials withheld); inspect central operation status.'); process.exitCode = 1; });
}
