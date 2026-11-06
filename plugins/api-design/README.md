# API Design

Design and review REST, GraphQL and OpenAPI contracts: naming, errors, pagination, versioning and compatibility.

`/api-review` reviews endpoints or an OpenAPI/GraphQL schema for consistency, safety and backward compatibility. `/openapi` drafts an OpenAPI description from existing route code. It keeps the repository's existing version, defaults to 3.1, and uses 3.2 only where its features are needed. The **API Design Guidelines** skill holds the conventions.

The plugin never calls the API. Compatibility findings are static; consumers outside the repository are unknown unless the user supplies them.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
