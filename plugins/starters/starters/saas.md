---
name: SaaS test checkout
description: Next.js App Router shell with explicitly manual Stripe test checkout
---
# SaaS starter: test billing only

Inert Markdown: confirm an empty destination, then approve writing the files below. Target Node 22+, Next.js 16.4.2 and React 19.3.1. This shell has no authentication or durable subscription fulfillment and is not production-ready. Dependency installation, local server startup and a manual test checkout each require explicit permission. Never generate live keys or client secrets.

## File: package.json
```json
{
  "name": "saas-test-starter",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=22" },
  "scripts": { "dev": "next dev --hostname 127.0.0.1", "build": "next build", "start": "next start --hostname 127.0.0.1", "test": "node --test" },
  "dependencies": { "next": "16.4.2", "react": "19.3.1", "react-dom": "19.3.1", "stripe": "^18.0.0" }
}
```

## File: app/layout.js
```jsx
export const metadata = { title: 'SaaS test starter' };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
```

## File: app/page.js
```jsx
export default function Page() {
  return <main>
    <h1>SaaS test checkout</h1>
    <p>Local development only. Clicking the button explicitly requests a test checkout.</p>
    <form action="/api/checkout" method="post">
      <button type="submit">Create test checkout</button>
    </form>
    <p>No production payment or subscription fulfillment is implemented.</p>
  </main>;
}
```

## File: lib/billing-config.js
```js
export function billingConfig(env) {
  if (!env.STRIPE_SECRET_KEY?.startsWith('sk_test_')) {
    throw new Error('A Stripe test secret key is required');
  }
  if (!/^price_[A-Za-z0-9]+$/.test(env.STRIPE_TEST_PRICE_ID || '')) {
    throw new Error('A Stripe test price identifier is required');
  }
  if (env.APP_URL !== 'http://localhost:3000') {
    throw new Error('This starter is restricted to http://localhost:3000');
  }
  return { key: env.STRIPE_SECRET_KEY, price: env.STRIPE_TEST_PRICE_ID, origin: env.APP_URL };
}
```

## File: app/api/checkout/route.js
```js
import Stripe from 'stripe';
import { billingConfig } from '../../../lib/billing-config.js';
export const runtime = 'nodejs';
export async function POST(request) {
  let config;
  try { config = billingConfig(process.env); }
  catch { return Response.json({ error: 'Test billing is not configured' }, { status: 503 }); }
  if (request.headers.get('origin') !== config.origin) {
    return Response.json({ error: 'Invalid origin' }, { status: 403 });
  }
  try {
    const stripe = new Stripe(config.key);
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: config.price, quantity: 1 }],
      success_url: `${config.origin}/?checkout=success`,
      cancel_url: `${config.origin}/?checkout=cancel`
    });
    if (!session.url) throw new Error('Missing checkout URL');
    return Response.redirect(session.url, 303);
  } catch {
    return Response.json({ error: 'Test checkout unavailable' }, { status: 502 });
  }
}
```

## File: test/billing-config.test.js
```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { billingConfig } from '../lib/billing-config.js';
const valid = { STRIPE_SECRET_KEY: 'sk_test_fixture_not_a_credential', STRIPE_TEST_PRICE_ID: 'price_fixture', APP_URL: 'http://localhost:3000' };
test('accepts test-only local configuration', () => {
  assert.equal(billingConfig(valid).origin, 'http://localhost:3000');
});
test('rejects missing keys, live mode and nonlocal origins', () => {
  assert.throws(() => billingConfig({}));
  assert.throws(() => billingConfig({ ...valid, STRIPE_SECRET_KEY: 'live_mode_forbidden' }));
  assert.throws(() => billingConfig({ ...valid, APP_URL: 'https://example.com' }));
});
```

## File: .env.example
```dotenv
# Fill only in ignored .env.local through approved secret storage.
STRIPE_SECRET_KEY=
STRIPE_TEST_PRICE_ID=
APP_URL=http://localhost:3000
```

## File: .gitignore
```gitignore
node_modules/
.next/
.env*
!.env.example
```

## Manual acceptance and production gates
Review Next/React MIT and Stripe SDK MIT licenses plus transitive dependencies. Approve `npm install --ignore-scripts` and review the generated lockfile. Run approved `npm test` and `npm run build`; report actual results. With no configuration, POST checkout should return 503. Wrong Origin with configured test values must return 403. Keep `STRIPE_SECRET_KEY` backend-only: never prefix it `NEXT_PUBLIC_`, log it or include it in browser bundles. Configuration tests use a clearly synthetic noncredential string and make no Stripe calls.

For an explicitly approved manual checkout only, set an actual Stripe **test** key and test recurring price in ignored `.env.local`, start the local server, open `http://localhost:3000` and manually click the button. Expect a Stripe test checkout redirect; confirm provider test mode before entering provider-documented test payment details. Do not automate checkout or use live cards. Repeated requests create separate test sessions; idempotency/rate limiting, authentication, tenant authorization, verified signed webhooks, durable event deduplication and fulfillment require implementation/testing before any production consideration. A success URL is not proof of payment. Deployment and live billing remain blocked.
