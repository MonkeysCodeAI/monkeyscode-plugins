import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { publish, pinnedRelease, RELEASES, downloadArchive } from './publish.mjs';
test('workflow explicitly passes immutable repository identity', async () => {
 const workflow = await readFile(new URL('../.github/workflows/publish.yml', import.meta.url), 'utf8');
 assert.ok(workflow.includes('GITHUB_REPOSITORY_ID: ${{ github.repository_id }}'));
 assert.ok(workflow.includes('GITHUB_REPOSITORY_OWNER_ID: ${{ github.repository_owner_id }}'));
});
test('missing repository identity fails before any network or publication', async () => {
 let requests = 0;
 await assert.rejects(publish({ MARKETPLACE_CI_ENABLED: 'true', MARKETPLACE_CI_ORIGIN: 'https://api.monkeyscode.com' }, {transport: async () => { requests++; throw Error('unexpected network'); }}), /Enabled immutable CI binding required/);
 assert.equal(requests, 0);
});
test('only allow-listed release tags with their exact source commit are accepted', () => {
 assert.equal(pinnedRelease('first-party-preview-20261031', '24e066886604a55e55f4f5002bae044e5d400968'), 'first-party-preview-20261031');
 assert.equal(pinnedRelease('first-party-preview-20261106', '9533e53ad2d6a33a382953ff610efb7b3df16162'), 'first-party-preview-20261106');
 assert.throws(() => pinnedRelease('first-party-preview-20261106', '24e066886604a55e55f4f5002bae044e5d400968'), /Unknown pinned release/);
 assert.throws(() => pinnedRelease('first-party-preview-29991231', '9533e53ad2d6a33a382953ff610efb7b3df16162'), /Unknown pinned release/);
 assert.throws(() => pinnedRelease('constructor', undefined), /Unknown pinned release/);
 assert.throws(() => pinnedRelease(undefined, undefined), /Unknown pinned release/);
 assert.ok(Object.isFrozen(RELEASES));
});
test('unknown release tag fails before any download', async () => {
 let requests = 0;
 await assert.rejects(downloadArchive('x-1.0.0.tar.gz', async () => { requests++; throw Error('unexpected network'); }, 'main'), /Unknown pinned release/);
 assert.equal(requests, 0);
});
test('every catalog package has exactly one pinned, unapproved manifest entry', async () => {
 const catalog = JSON.parse(await readFile(new URL('../catalog.json', import.meta.url), 'utf8'));
 const preview = JSON.parse(await readFile(new URL('../preview-manifest.json', import.meta.url), 'utf8'));
 assert.deepEqual(preview.releases, RELEASES);
 assert.equal(preview.status, 'unsigned-preview');
 for (const item of catalog.plugins) {
  const entries = preview.plugins.filter(p => p.plugin === item.id);
  assert.equal(entries.length, 1, item.id);
  const [entry] = entries;
  assert.equal(entry.version, item.version, item.id);
  assert.equal(entry.archive, `${item.id.split('/')[1]}-${item.version}.tar.gz`);
  assert.equal(pinnedRelease(entry.release, entry.sourceCommit), entry.release);
  assert.equal(entry.marketplaceApproved, false);
  assert.equal(entry.status, 'unsigned-preview');
  assert.match(entry.archiveDigest, /^[a-f0-9]{64}$/);
 }
 assert.equal(preview.plugins.length, catalog.plugins.length);
});
