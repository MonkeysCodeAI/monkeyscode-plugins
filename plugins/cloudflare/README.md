# Cloudflare

Review Workers, Pages, DNS and caching configuration; Cloudflare MCP disabled until connected.

`/workers-review` reviews a Cloudflare Workers or Pages project (Wrangler config, bindings, routes, caching and limits).

## Disabled Cloudflare connection
`.mcp.json` declares the Cloudflare hosted MCP endpoint `https://mcp.cloudflare.com/mcp` with `disabled: true`. Installation launches nothing and makes no connection. Cloudflare authenticates with OAuth or scoped API tokens. This package implements no OAuth connector and stores no credential, refresh token or client secret. Use the host's existing supported MCP connection flow manually, only after reviewing provider terms, scopes and the tool list. **The endpoint URL must be re-verified against the provider's current documentation during security review; providers version these URLs.**

Connecting can expose and modify Workers, KV, R2, D1, DNS and Zero Trust resources depending on granted scopes; grant the narrowest scope. The server is not claimed read-only; every remote write needs explicit approval through actual host policy. The command works from pasted evidence when the integration is unavailable.

## Acceptance
Install must remain disabled with no network activity. Test that the command asks for evidence when unconnected. A separately authorized session must prove connection, tool listing and write denial/approval before enabling. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10 do not imply completed OAuth or cross-app acceptance. Original prompts and configuration are MIT; remote service software and terms are not relicensed. Release review, scanning and signing are pending.
