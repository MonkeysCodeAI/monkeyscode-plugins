# Linear

Turn Linear issues into scoped plans, branches and status drafts; OAuth MCP disabled until connected.

`/linear-issue` turns a Linear issue (fetched through the connector when connected, or pasted) into acceptance criteria, a branch name, an implementation plan and a status update draft.

## Disabled Linear connection
`.mcp.json` declares the Linear hosted MCP endpoint `https://mcp.linear.app/mcp` with `disabled: true`. Installation launches nothing and makes no connection. Linear authenticates with OAuth. This package implements no OAuth connector and stores no credential, refresh token or client secret. Use the host's existing supported MCP connection flow manually, only after reviewing provider terms, scopes and the tool list. **The endpoint URL must be re-verified against the provider's current documentation during security review; providers version these URLs.**

Connecting sends repository-derived text to Linear and allows issue, project and comment writes. The server is not claimed read-only; every remote write needs explicit approval through actual host policy. The command works from pasted evidence when the integration is unavailable.

## Acceptance
Install must remain disabled with no network activity. Test that the command asks for evidence when unconnected. A separately authorized session must prove connection, tool listing and write denial/approval before enabling. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10 do not imply completed OAuth or cross-app acceptance. Original prompts and configuration are MIT; remote service software and terms are not relicensed. Release review, scanning and signing are pending.
