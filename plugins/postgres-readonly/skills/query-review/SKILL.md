---
name: PostgreSQL query review
description: Review SQL without connecting to a database
trigger: manual
priority: 50
---
Review supplied SQL and schema as text. Identify unsafe writes, locking, expensive scans, unbounded results, injection and sensitive columns. Recommend parameter binding, explicit columns, pagination, indexes supported by actual predicates and bounded statement/lock timeouts. EXPLAIN ANALYZE executes the query; do not suggest it as harmless inspection.

No MCP server ships here. Connectivity is blocked until an official or otherwise verified server, dependency license and database-enforced read-only role are reviewed. Require non-owner credentials, no write grants, restricted schemas, verified TLS and read-only transactions; server flags or prompts alone are not enforcement. Functions, extensions and foreign data wrappers can have side effects even in SELECT statements. Validate attempted writes fail in an isolated database before enabling any integration. Never connect or print connection strings. Return findings, evidence, proposed SQL and a separately approved validation plan.
