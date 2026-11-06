# Feature Dev

Guided feature development: discovery, codebase exploration, architecture options, implementation plan and review.

`/feature` runs a phased workflow: clarify requirements, explore the codebase, compare architecture options, produce an implementation plan with acceptance criteria and then review the result. The `code-explorer` and `feature-architect` plan-mode agents can be delegated to for exploration and design.

The command proposes; edits happen only after the user approves the plan through normal host permissions. Tests are drafted, never claimed as passing without evidence.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
