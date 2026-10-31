# Core Skills

The 24 shared MonkeysCode framework and language skills, packaged as a declarative MIT-licensed plugin. Requires IDE **1.3.10**, Agent Manager **1.1.8**, or CLI **1.1.10**.

## Compatibility

The `skills/*/SKILL.md` files are the source of truth. Generated host definitions preserve the original prompt bodies byte for byte, including whitespace, and preserve metadata, trigger arrays, priority and stable `builtin:*` identities. `baseline-sha256.json` records the original prompt and metadata hashes and ordering.

This content migration does **not** change enable choices: Agent Manager built-ins remain disabled by default; IDE built-ins remain enabled by default. Existing disabled overrides, edited prompts, and user-created skills remain user-owned. Reset to Default restores shipped content while retaining the user's enabled state. Legacy storage is retained for rollback.

## CLI onboarding

The bundled adapter exposes shipped definitions but does not activate skills at runtime or change existing no-plugin profiles. Installation and deduplication require an explicitly provided store and affirmative consent. New-profile onboarding may offer preinstalled, enabled Core Skills only after explicit approval; the onboarding UI integration is pending. Merely importing the adapter makes no changes.

## Provenance and permissions

Bundled content has **application-packaged provenance**, not marketplace-signed provenance. This package contains declarative skill prompts only: no hooks, executable tools, MCP servers or account access. Packaging does not grant account permissions or bypass trust, managed policy, signature validation or plugin activation checks. No signing keys or signatures are supplied or fabricated by this package. Marketplace installation must pass the normal verification and consent flow independently.

## Contents

Laravel, Drupal, React, Docker, Python, Go, Rust, TypeScript, JavaScript, Java, C#, Ruby, Swift, Kotlin, PHP, Vue, Angular, Next.js, Django, Spring Boot, .NET, NestJS, Svelte and Rails.
