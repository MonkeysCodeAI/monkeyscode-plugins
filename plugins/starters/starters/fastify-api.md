---
name: Fastify API
description: Local Fastify 5 API with node:test injection tests
---
# Fastify API starter

This is an inert Markdown recipe. Confirm an empty destination and approve file generation. Use Node 22+. Write these files; installation and execution require separate permission.

## File: package.json
```json
{
  "name": "fastify-api-starter",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=22" },
  "scripts": { "start": "node src/server.js", "test": "node --test" },
  "dependencies": { "fastify": "^5.0.0" }
}
```

## File: src/app.js
```js
import Fastify from 'fastify';
export function buildApp() {
  const app = Fastify({ logger: false });
  app.get('/health', async () => ({ status: 'ok' }));
  app.get('/hello/:name', {
    schema: {
      params: {
        type: 'object', required: ['name'], additionalProperties: false,
        properties: { name: { type: 'string', minLength: 1, maxLength: 80 } }
      }
    }
  }, async request => ({ message: `Hello, ${request.params.name}` }));
  return app;
}
```

## File: src/server.js
```js
import { buildApp } from './app.js';
const app = buildApp();
try {
  await app.listen({ host: '127.0.0.1', port: 3000 });
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => { await app.close(); });
}
```

## File: test/app.test.js
```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/app.js';
test('health and greeting contract', async t => {
  const app = buildApp();
  t.after(() => app.close());
  const health = await app.inject({ method: 'GET', url: '/health' });
  assert.equal(health.statusCode, 200);
  assert.deepEqual(health.json(), { status: 'ok' });
  const greeting = await app.inject({ method: 'GET', url: '/hello/Ada' });
  assert.equal(greeting.statusCode, 200);
  assert.deepEqual(greeting.json(), { message: 'Hello, Ada' });
  const missing = await app.inject({ method: 'GET', url: '/missing' });
  assert.equal(missing.statusCode, 404);
  const long = await app.inject({ method: 'GET', url: `/hello/${'a'.repeat(81)}` });
  assert.equal(long.statusCode, 400);
});
```

## File: .gitignore
```gitignore
node_modules/
.env
.env.*
!.env.example
coverage/
```

## Manual acceptance
Review Fastify's MIT license and resolved dependencies. With explicit approval run `npm install --ignore-scripts`, inspect/retain the generated lockfile, then `npm test`; all injection tests should pass without listening or network. Approve `npm start`, request `http://127.0.0.1:3000/health`, expect HTTP 200 with status ok, then stop the process. No database, authentication or deployment is included; add those with separate design/authorization and tests. Never bind publicly or install dependencies automatically.
