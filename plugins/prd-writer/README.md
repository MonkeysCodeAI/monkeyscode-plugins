# PRD Writer

Write product requirement documents, user stories and acceptance criteria grounded in the existing product.

`/prd` drafts a product requirements document. `/stories` breaks a PRD or feature into user stories with Given/When/Then acceptance criteria. Both read the repository to ground requirements in what exists. Feeds `feature-dev`.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
