# Refactor & Migrate

Plan safe refactors, dependency and framework upgrades, and dead-code removal with staged, reversible steps.

`/upgrade` plans a dependency or framework upgrade from local manifests and supplied changelogs. `/refactor` plans a behavior-preserving refactor in small verifiable steps. The **Safe Refactoring** skill covers characterization tests, strangler patterns, codemods and dead-code detection.

Plans are proposals. The plugin does not install packages, run codemods or fetch changelogs; it asks for release notes when they are not available locally.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
