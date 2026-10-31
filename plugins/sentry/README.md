# Sentry triage

`/sentry-fix [issue or evidence]` analyzes sanitized traces and local source, writes a bounded regression fix and reports unexecuted validation steps. It does not resolve issues, change alerts or deploy.

## Disabled OAuth connection
The official remote endpoint `https://mcp.sentry.dev/mcp` is declared in `.mcp.json` with `disabled: true`. Installation launches nothing; no local dependency is downloaded. Sentry uses OAuth. This package does not implement an OAuth connector, and renderer OAuth support is unsupported here. Use the application's **existing supported MCP connection flow manually** to authenticate only after reviewing provider terms, scopes, tools and host capability support. Do not simply flip the flag and claim authentication works.

No credential token, refresh token or client secret is stored in source. The command works with pasted sanitized evidence when the integration is unavailable. Connecting sends data to Sentry and may expose sensitive telemetry; review access and redact PII. The remote server is not claimed read-only, and every remote write needs explicit approval through actual host policy.

## Acceptance
Verify install remains disabled with no network activity. Test unavailable OAuth produces a clear evidence request; test a sanitized trace yields a source-backed hypothesis and regression test. A separately authorized native OAuth session must prove actual connection/tool behavior before enabling. Targets IDE 1.3.10 and Agent/CLI 1.0.0 do not imply completed OAuth or cross-app acceptance. Original prompts/configuration are MIT; remote service terms and software remain separate. Release review, scanning and signing are pending gates.
