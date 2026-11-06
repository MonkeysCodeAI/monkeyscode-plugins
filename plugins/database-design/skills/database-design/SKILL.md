---
name: Database Design
description: Schema modeling, indexes and zero-downtime migrations. Use when designing tables, adding indexes or reviewing a migration for locks and backfills.
trigger: manual
---
# Database design

- **Model for access patterns.** Normalize to 3NF by default; denormalize deliberately with a sync mechanism.
- **Constraints are documentation that the database enforces.** NOT NULL, unique, foreign keys and checks catch bugs earlier than code.
- **Types:** `timestamptz`, `numeric` for money (or integer minor units), `text` with checks over arbitrary varchar limits, `jsonb` only for genuinely schemaless data.
- **Indexes:** composite indexes ordered by equality then range then sort; covering indexes (`INCLUDE`) for hot reads; partial indexes for sparse predicates; drop unused indexes (they slow writes).
- **Zero-downtime migrations (expand/contract):** add nullable column → deploy code writing both → backfill in batches → add constraint (NOT VALID, then VALIDATE) → switch reads → remove old column later. Build indexes concurrently. Set `lock_timeout` and `statement_timeout`.
- **MySQL:** prefer online DDL (`ALGORITHM=INSTANT/INPLACE`) or gh-ost/pt-online-schema-change for large tables.
- **MongoDB:** model by query, embed bounded one-to-few, reference unbounded; schema validation; compound indexes follow ESR (equality, sort, range).
- **Operations:** backups tested by restore, point-in-time recovery, connection pooling, monitoring slow queries.
