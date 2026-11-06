---
name: Safe Refactoring
description: Characterization tests, strangler migrations and codemods. Use when restructuring code, removing dead code or migrating without behavior change.
trigger: manual
---
# Safe refactoring and migration

1. **Pin behavior first.** Write characterization tests around the current behavior, including the odd parts. Golden-file or snapshot tests suit large outputs.
2. **Small steps.** Each commit does one mechanical transformation and keeps tests green. Separate moves from logic changes so diffs are reviewable.
3. **Strangler pattern.** For large rewrites, add the new path behind an interface or flag, route a fraction of traffic, compare results, then remove the old path.
4. **Parallel change (expand/contract).** Add the new API, migrate callers, then remove the old one. Applies to database columns, endpoints and config keys.
5. **Codemods.** Prefer official codemods (framework upgrade tools, jscodeshift, ts-morph, Rector for PHP, OpenRewrite for Java, gofmt -r, comby) and review their diffs; never trust them blindly.
6. **Dead code.** Combine static references, coverage, runtime telemetry and feature-flag state. Beware reflection, dependency injection, templates, routes, serialization and public packages.
7. **Dependencies.** One major at a time; clear deprecation warnings first; read the migration guide; update lockfiles deliberately.
8. **Done means:** tests green, no behavior change observed, docs and changelog updated, rollback understood.
