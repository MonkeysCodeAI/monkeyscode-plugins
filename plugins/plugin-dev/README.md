# Plugin Dev

Scaffold, validate and prepare MonkeysCode plugins for review and signed publication.

`/new-plugin` drafts a complete package layout (manifest, README, LICENSE, CHANGELOG, icon, commands, skills, agents) for review. `/plugin-check` statically reviews an existing package against the MonkeysCode packaging rules and the shared plugin kernel manifest schema. The **Plugin Authoring** skill explains component formats and the release pipeline.

Nothing is written, packaged, signed or published by this plugin. Validation results are static findings, not proof that the package passes CI, scanning or moderation.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
