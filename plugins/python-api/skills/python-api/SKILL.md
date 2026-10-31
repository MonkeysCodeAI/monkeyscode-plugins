---
name: Python API
description: FastAPI and Django API design with isolation-focused tests
trigger: manual
---
# Python API work
Read pyproject.toml or requirements and adjacent endpoints/tests to identify framework and versions. Follow the project's sync/async boundary and test runner.

For FastAPI, define explicit request and response models using the installed Pydantic version. Use dependency injection for authorization and request-scoped database sessions; ensure sessions close on errors. Do not call blocking drivers directly from async handlers.

For Django and Django REST Framework, check queryset scoping before object lookup, serializer write fields, permissions and transaction boundaries. Optimize related data with select_related/prefetch_related only where relevant. Do not equate authentication with object-level authorization.

Define stable status codes and structured errors; avoid leaking stack traces or sensitive fields. Bound pagination and input sizes. Make side effects idempotent when retries are possible.

Test valid requests, validation errors, anonymous/forbidden access, cross-tenant object access and rollback. Use disposable databases and fake external clients, not production services. In FastAPI restore dependency overrides after each test; in Django match the project's database test setup. Run checks only after normal approval, and report actual results separately from suggestions.
