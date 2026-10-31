---
name: MonkeysLegion PHP API
description: Verified skeleton 2.1.6 bootstrap with isolated database validation
---
# MonkeysLegion API starter

This inert Markdown recipe deliberately consumes the real upstream skeleton instead of inventing framework files. Confirm an empty target directory. Manual prerequisites: PHP 8.4 with required extensions, Composer, Git and an isolated PostgreSQL 16+ database. File generation, downloads, Composer resolution, key generation and migrations need separate explicit approval.

## Phase 1: provenance and attribution
Use `https://github.com/MonkeysCloud/MonkeysLegion-Skeleton` at release 2.1.6, immutable commit `daac8b5d557b4eaf9c62ff6200276b058c7717ad`. After an approved clone, verify `git rev-parse HEAD` equals that commit and inspect composer.json and LICENSE. Do not run scripts from an unverified checkout. Keep upstream LICENSE: MIT, Copyright (c) 2025 MonkeysCloud. Preserve upstream attribution and organization identity. The catalog package does not redistribute the skeleton itself.

Example manual download sequence (not executed by the plugin):
```sh
git clone --branch 2.1.6 --single-branch https://github.com/MonkeysCloud/MonkeysLegion-Skeleton php-api
cd php-api
git rev-parse HEAD
composer validate --strict
composer install --no-scripts --no-interaction
```
If the tag cannot be resolved or commit mismatches, stop rather than switching to main. Review the resulting lockfile and licenses. Preserve TLS verification. Initial installation disables scripts; review scripts/plugins before approving any separately. Do not assume framework version equals skeleton tag.

## Phase 2: local documentation file template
Write this file only after reviewing the actual skeleton's scripts/routes/configuration. It is an executable-free checklist, not fabricated framework code.

### File: docs/local-api-checks.md
```markdown
# Local API acceptance

Target runtime: PHP 8.4; isolated PostgreSQL 16 or newer.

- Verify the skeleton commit against the approved provenance record.
- Validate Composer metadata and inspect scripts before enabling them.
- Copy the upstream environment example into an ignored local file only.
- Configure isolated database credentials using the actual upstream variable names.
- Inspect registered routes and select an existing route for the smoke test.
- Approve the documented framework boot command after reading its implementation.
- Verify the selected route's expected status and response against its source.
- Add a regression test using the installed framework's actual test conventions.
- Run the reviewed test suite on the target PHP and database versions.
- Record failures and missing prerequisites; never infer cloud readiness.
```

## Phase 3: database and API checks
Read the upstream README, configuration and command registry for exact environment variables and boot/migration commands. Do not invent CLI entry points or generate cryptographic keys automatically. Use an isolated nonproduction database, verify TLS when remote, and separate migration privileges from runtime access. No cloud provisioning is authorized.

Perform approved PHP syntax checks on changed files, Composer validation, framework boot and contract tests using actual installed APIs. Inspect a chosen route for authorization and response behavior before manually requesting it. Test input validation and an unauthorized request where applicable. Record PHP8.4/PG16 evidence independently: repository-local PHP8.5/PG18 runs do not satisfy target acceptance. Refuse to claim successful installation, migrations or production deployment without real outputs.
