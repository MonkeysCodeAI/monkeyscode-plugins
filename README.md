# MonkeysCode first-party plugins

Canonical public plugin source: https://github.com/MonkeysCodeAI/monkeyscode-plugins

This repository contains the 49 first-party packages exported from
`MonkeysCloud/monkeyscode` commit `9533e53ad2d6a33a382953ff610efb7b3df16162`.
Only `catalog/plugins/**` and catalog metadata were exported; application code,
credentials, databases, dependencies and caches are not included.

## Preview releases

`preview-manifest.json` pins every catalog version to exactly one immutable
prerelease and the monorepo commit it was built from. `tools/publish.mjs`
accepts only the releases listed there and in its reviewed `RELEASES` allow-list.

- `first-party-preview-20261031`: the original 20 **unsigned preview** archives
  from monorepo commit `24e066886604a55e55f4f5002bae044e5d400968`. It is kept
  unchanged. git-workflow, docs-writer, github and sentry 1.0.0 still resolve here.
- `first-party-preview-20261106`: 45 **unsigned preview** archives from monorepo
  commit `9533e53ad2d6a33a382953ff610efb7b3df16162`. It adds 29 new packages and
  new versions of 16 launch packages: 1.0.1, plus PostgreSQL read-only 1.1.1.

Archives are deterministic (ustar, SOURCE_DATE_EPOCH 0, gzip level 9). Each
release ships `SHA256SUMS`.

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
