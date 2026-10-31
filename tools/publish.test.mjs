import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { publish } from './publish.mjs';
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
