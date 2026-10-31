# Cloud CLIs

Draft 1.0.0 by MonkeysCode (MIT). Select the manual Cloud CLI Advice skill to discuss AWS, gcloud or az operations. The rules pack advises inspection first, explicit account/region scope and approval before writes.

**Read-only by default is prompt advice, not a security guarantee.** This package cannot enforce cloud permissions. Use provider IAM and host tool policy with least-privilege credentials. No auto-apply or approval bypass is authorized. Remote inspection can expose sensitive data and incur costs; confirm scope and obtain normal approval before execution.

Supports IDE 1.3.10, Code Agent 1.1.8 and CLI 1.1.10, pending app acceptance. No hooks, MCP servers, executables, automatic network calls or extra dependencies. No environment variables are consumed by this package. User-selected cloud CLIs use their own authenticated environment/configuration; never print tokens or secret values.

Original text and static SVG, no cloud binaries or third-party code. Provider names do not imply affiliation. Rights review, signing and publishing approval remain release gates.
