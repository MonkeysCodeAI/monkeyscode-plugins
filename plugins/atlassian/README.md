# Jira & Confluence

Plan from Jira issues and draft Confluence docs; Atlassian remote MCP disabled until connected.

`/jira-issue` turns a Jira issue into acceptance criteria and a plan. `/confluence-doc` drafts a design or runbook page from repository evidence.

## Disabled Atlassian connection
`.mcp.json` declares the Atlassian hosted MCP endpoint `https://mcp.atlassian.com/v1/mcp` with `disabled: true`. Installation launches nothing and makes no connection. Atlassian authenticates with OAuth 2.1 or scoped API tokens; organization admins may need to allow the client. This package implements no OAuth connector and stores no credential, refresh token or client secret. Use the host's existing supported MCP connection flow manually, only after reviewing provider terms, scopes and the tool list. **The endpoint URL must be re-verified against the provider's current documentation during security review; providers version these URLs.**

Connecting allows Jira issue and Confluence page writes in the authorized sites. The server is not claimed read-only; every remote write needs explicit approval through actual host policy. The command works from pasted evidence when the integration is unavailable.

## Acceptance
Install must remain disabled with no network activity. Test that the command asks for evidence when unconnected. A separately authorized session must prove connection, tool listing and write denial/approval before enabling. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10 do not imply completed OAuth or cross-app acceptance. Original prompts and configuration are MIT; remote service software and terms are not relicensed. Release review, scanning and signing are pending.
