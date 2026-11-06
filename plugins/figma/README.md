# Figma

Design-to-code handoff from Figma frames and variables; Figma MCP disabled until connected.

`/figma-to-code` maps a Figma frame (via the connector, or exported specs and screenshots) onto existing components and design tokens. Pairs with `design-studio`.

## Disabled Figma connection
`.mcp.json` declares the Figma hosted MCP endpoint `https://mcp.figma.com/mcp` with `disabled: true`. Installation launches nothing and makes no connection. Figma authenticates with OAuth; some tools require specific Figma plans or Dev Mode seats. This package implements no OAuth connector and stores no credential, refresh token or client secret. Use the host's existing supported MCP connection flow manually, only after reviewing provider terms, scopes and the tool list. **The endpoint URL must be re-verified against the provider's current documentation during security review; providers version these URLs.**

Connecting reads design files the account can access; treat design content as confidential. The server is not claimed read-only; every remote write needs explicit approval through actual host policy. The command works from pasted evidence when the integration is unavailable.

## Acceptance
Install must remain disabled with no network activity. Test that the command asks for evidence when unconnected. A separately authorized session must prove connection, tool listing and write denial/approval before enabling. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10 do not imply completed OAuth or cross-app acceptance. Original prompts and configuration are MIT; remote service software and terms are not relicensed. Release review, scanning and signing are pending.
