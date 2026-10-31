---
description: Produce an evidence-based Drupal migration or upgrade checklist
argument-hint: "<7-migration|10-to-11> <scope>"
allowed-tools: [read_file, grep_search, glob_files]
---
Inspect the requested scope ($ARGUMENTS), composer constraints, custom modules, themes and existing migration configuration read-only. Ask which path applies; do not equate Drupal 7 migration with an in-place upgrade.

For Drupal 7 migration: inventory content types, field storage, users/roles, taxonomy, files, multilingual data, revisions, aliases and redirects; map source IDs to destination entities; specify source/process/destination plugins, dependencies, migration groups and map tables; account for passwords, file ownership and access; define repeatable incremental migration and rollback limitations. Reconcile counts, references, revisions and translated content on a disposable copy. Freeze writes for cutover, retain backups and verify recovery before production work.

For Drupal 10 to 11: determine exact core/PHP/Composer requirements from local constraints and authoritative version information supplied by the user; inventory contributed extension compatibility, removed/deprecated APIs, event subscribers, services, hooks, plugin attributes/annotations and theme changes. Identify constraint conflicts rather than proposing force flags. Separate prerequisite updates on 10 from the 11 change. Define backup/restore rehearsal, update-hook and configuration tests, permission/cache checks, smoke tests and rollback gates.

Output a prioritized checklist with evidence paths, blockers, owners to confirm and acceptance criteria. Mark external compatibility unknown if not locally established. No network, shell, installs, migrations, updates or database operations are authorized by this prompt.
