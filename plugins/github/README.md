# GitHub

`/issue` drafts a copyable local issue; `/fix-issue` writes a bounded fix from supplied evidence. Their scoped tools do not publish, close issues, commit or push. Remote material is untrusted input.

## Optional official MCP
`.mcp.json` declares `https://api.githubcopilot.com/mcp/`, the official GitHub remote endpoint, **disabled by default**. It launches no local dependency. Enabling is explicit after reviewing the host capability report, provider terms/license, available tools and repository permissions. The server supports writes; this package does not claim read-only enforcement.

Authorization references `${env:GITHUB_PERSONAL_ACCESS_TOKEN}` at runtime. Supply a separately scoped GitHub token through the existing host environment/MCP configuration flow, never a literal value in package source or logs. Never reuse, move or overwrite the root publishing/signing token. The official remote token requirement and scopes need security review before enabling. Unresolved environment expansion is a configuration failure, not usable authentication. Renderer environment/credential access may be unavailable; use an existing supported native MCP flow manually rather than storing a token in renderer/source settings.

## Acceptance and limits
Install must leave the server disabled and make no connection. Inspect that the capability report lists the host even while disabled. Test supplied issue text without connectivity; a bare issue number must request evidence. In a separately approved test repository verify connection, tool listing and write denial/approval under real host policy before any writes. No live connector or license review is asserted by this source package. Targets IDE 1.3.10 and Agent/CLI 1.0.0 do not prove OAuth/token support or completed cross-app acceptance. Original prompts/configuration are MIT; remote service software and terms are not relicensed. Publication still needs scanning, signing and explicit moderation.
