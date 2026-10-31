---
name: Cloud CLI Advice
description: Read-first AWS, Google Cloud and Azure operational guidance
trigger: manual
---
# Cloud CLI workflow
Start with the user's question, intended account/project/subscription, region and resource scope. Prefer existing local configuration evidence; never read credential files or print tokens. Explain commands before requesting execution approval.

For AWS, make profile and region explicit; for gcloud, confirm project and account; for az, confirm subscription and tenant. Identity queries also contact remote services and must pass host permissions. Suggest narrow list/describe/show operations with bounded output and redaction. Do not assume a read verb is harmless: logs, secrets and database reads can expose sensitive data or incur cost.

Before any create/update/delete, deploy, IAM, billing or state-changing command, describe exact targets, blast radius, cost, verification and rollback, then obtain explicit user approval and normal tool authorization. Never use --yes, --quiet or similar options to substitute for approval. Do not auto-apply plans or switch account defaults silently.

This skill is model advice, not a security boundary or read-only guarantee. Enforce access with scoped cloud credentials and host policy. No CLI binary or cloud integration is installed by this package.
