---
name: API Design Guidelines
description: REST and GraphQL conventions for errors, pagination, versioning and security. Use when designing endpoints or reviewing an API schema.
trigger: manual
---
# API design guidelines

## REST
- Plural nouns for collections (`/orders`, `/orders/{id}`); verbs only for true actions (`/orders/{id}/cancel`).
- Methods: GET safe, PUT/DELETE idempotent, POST for creation and actions, PATCH for partial updates (JSON Merge Patch or JSON Patch, documented).
- Status codes: 200/201/202/204 for success; 400 validation, 401 unauthenticated, 403 forbidden, 404 not found, 409 conflict, 412 precondition, 422 semantic validation, 429 rate limited.
- Errors: one shape everywhere, ideally RFC 9457 `application/problem+json` with `type`, `title`, `status`, `detail` and field errors.
- Pagination: cursor-based for large or changing data; return `next` cursors and stable sort keys. Cap page size.
- Concurrency: ETags with `If-Match` for updates; idempotency keys for POSTs that create money or side effects.
- Versioning: avoid breaking changes; when needed, version in the path or a header and publish deprecation and sunset dates.
- Consistent casing, ISO 8601 UTC timestamps, string IDs, explicit nulls policy.

## GraphQL
- Nullable by default thoughtfully; connections for pagination; input types for mutations; payload types with user errors.
- Depth and complexity limits, persisted queries, DataLoader to avoid N+1.
- Deprecate fields with `@deprecated(reason:)`; never repurpose a field.

## Security
Authorize every object access (no IDOR), validate input against schema, avoid mass assignment, never leak stack traces, and rate-limit per identity.
