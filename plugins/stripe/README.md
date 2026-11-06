# Stripe

Review Stripe integrations for webhooks, idempotency and test-mode safety; Stripe MCP disabled until connected.

`/stripe-review` reviews payment code for webhook verification, idempotency, error handling and secret hygiene.

## Disabled Stripe connection
`.mcp.json` declares the Stripe hosted MCP endpoint `https://mcp.stripe.com` with `disabled: true`. Installation launches nothing and makes no connection. Stripe authenticates with OAuth or a restricted API key passed by the host. Use a **test-mode restricted key** only. This package implements no OAuth connector and stores no credential, refresh token or client secret. Use the host's existing supported MCP connection flow manually, only after reviewing provider terms, scopes and the tool list. **The endpoint URL must be re-verified against the provider's current documentation during security review; providers version these URLs.**

Connecting can create customers, payments, refunds and other objects. Live-mode keys must never be used with this package. The server is not claimed read-only; every remote write needs explicit approval through actual host policy. The command works from pasted evidence when the integration is unavailable.

## Acceptance
Install must remain disabled with no network activity. Test that the command asks for evidence when unconnected. A separately authorized session must prove connection, tool listing and write denial/approval before enabling. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10 do not imply completed OAuth or cross-app acceptance. Original prompts and configuration are MIT; remote service software and terms are not relicensed. Release review, scanning and signing are pending.
