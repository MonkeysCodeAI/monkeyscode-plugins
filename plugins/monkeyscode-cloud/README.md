# MonkeysCode Cloud

Use MonkeysCode cloud workspaces and hosted cloud jobs correctly: lifecycle, exec vs PTY, safe file writes and cost.

`/cloud-plan` decides whether a task fits a persistent **cloud workspace**, a one-shot **cloud job**, or the local machine, and drafts the steps with cost and auto-stop called out. The **Cloud Workspaces** skill summarizes the workspace contract for agents and integrators.

The plugin does not create, start, stop or bill anything. Workspaces bill per minute while running; every plan surfaces cost before creation and the stop step at the end.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
