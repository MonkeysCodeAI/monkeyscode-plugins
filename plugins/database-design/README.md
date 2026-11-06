# Database Design

Schema design, indexing, safe zero-downtime migrations and query review for PostgreSQL, MySQL, SQLite and MongoDB.

`/schema-design` drafts a schema from requirements. `/migration-review` checks migrations for locking, data loss and rollback safety. The **Database Design** skill covers modeling, indexes and expand/contract migrations. No database connection is made (see `postgres-readonly` for that).

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
