# MonkeysCode first-party plugins

Canonical public plugin source: https://github.com/MonkeysCodeAI/monkeyscode-plugins

This repository contains the 20 first-party packages exported from
`MonkeysCloud/monkeyscode` commit `f45584039ee55cc7a32e39542c096ed20ccebee4`.
Only `catalog/plugins/**` and catalog metadata were exported; application code,
credentials, databases, dependencies and caches are not included.

## Preview releases

The `first-party-preview-20261031` prerelease contains 20 **unsigned preview**
archives, a provenance manifest and SHA-256 checksums. PostgreSQL read-only is
version 1.1.0; the remaining packages are version 1.0.0. Archives are byte-identical
to the original preview at monorepo commit
`24e066886604a55e55f4f5002bae044e5d400968` (package source is unchanged).

These are not scanned, signed or approved marketplace releases. Do not bypass
managed signature or trust checks to install them. The production scanner's
isolation acceptance is blocked; publication here does not remove that gate.
The public marketplace publisher namespace remains `MonkeysCode`.

## Content, safety and licenses

Each package includes its manifest, README, MIT license, changelog and icon.
Review each package's declared executable components, credentials, app support
and instructions before use. Prompts are not permission enforcement. Hooks/MCP
may execute code; GitHub and Sentry integrations are disabled by default.
PostgreSQL exposes only structured read-only tools and requires documented
least-privileged credentials and a verified local psql binary.

The core-skills package holds the 24 shared language/framework skill definitions.
Existing users' disabled choices and prompt edits must be preserved by clients.
No GitHub repository name, minimum version or first-party label confers trust.

MonkeysCloud retains legitimate MonkeysLegion upstream attribution. No source
repository was transferred or deleted. Package LICENSE files govern each package.

## Release process

Approved distribution remains: immutable source → quality and identity checks →
private upload → isolated scanning and signing → explicit moderation → Azure
approved artifact delivery → native signature/capability/trust verification.
This repository has no production publishing credentials or signing keys.

Implementation and tests live in the application monorepo:
https://github.com/MonkeysCloud/monkeyscode/tree/f45584039ee55cc7a32e39542c096ed20ccebee4/catalog
