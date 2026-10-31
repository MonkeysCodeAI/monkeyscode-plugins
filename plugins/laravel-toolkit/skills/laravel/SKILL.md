---
name: Laravel Toolkit
description: Laravel-specific implementation and review checklist
trigger: manual
---
# Laravel applications
Read composer.json and the relevant routes, controller, model and test before recommending a change. Follow the installed Laravel major version, not assumed current APIs.

- Put input validation in existing Form Requests; authorize through policies or gates. Treat validation and authorization as separate requirements.
- Use explicit mass-assignment fields and scoped queries. Check tenant ownership on every lookup; hiding a field does not authorize access.
- Prefer eager loading when response serialization would otherwise cause N+1 queries. Paginate collections and test query behavior on representative data.
- Keep transactions short. Queue external work after commit when supported; make jobs idempotent and define retries and failure behavior.
- Review migrations for locks, rollback feasibility and existing data. Never run migrations, seeders or destructive Artisan operations without explicit approval and a confirmed environment.
- Use feature tests for route status, validation, forbidden access and JSON shape; use isolated databases and factories. Preserve the repository's PHPUnit or Pest conventions.

Provide exact file references, a minimal change and tests to verify it. Do not claim a test passed unless it actually ran. Never read or print .env secrets.
