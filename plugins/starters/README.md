# Starters

Select `starters/saas.md` for Next.js 16.4.2/React 19.3.1 with Stripe **test-only** checkout, or `starters/fastify-api.md` for Fastify 5 and node:test. `monkeyscode.starters` points to the actual `starters` directory. These are inert platform Markdown recipes containing copyable file templates, not installers. They target Agent and CLI 1.0.0, not IDE starter UI support.

## Generation phases
1. Review the safety skill, selected template and empty destination. Approve exact files before generation.
2. Write the listed files; manually review dependency versions/licenses and generate a lockfile in a separately approved install. No scripts or downloads run on plugin installation.
3. Approve local tests/build separately. Templates have acceptance steps; results are not asserted here.

SaaS uses Node 22+, backend-only `STRIPE_SECRET_KEY` beginning `sk_test_`, an explicit test price and local `APP_URL`. Real credentials belong in ignored local environment storage. Never expose a secret with `NEXT_PUBLIC_`; checkout is triggered only by an explicit manual button click and must be separately authorized. This is not a complete SaaS identity/subscription product: authentication, durable webhook processing, tenant authorization and production billing are additional gates.

Fastify uses Node 22+, local port 3000 and no credentials. Generated apps may access npm on install and Stripe on checkout; the plugin itself makes no network calls. Permission policy, not prompts, governs execution.

SplitIt and ShortLink YouTube demo sources and redistribution rights are unverified. They are intentionally excluded, not replaced by fake lookalike examples. Original recipes are MIT; dependencies have separate licenses to review. No production deployment, publication approval or completed cross-app acceptance is claimed.
