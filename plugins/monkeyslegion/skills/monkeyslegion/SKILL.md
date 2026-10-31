---
name: MonkeysLegion
description: Work from the verified MonkeysCloud skeleton and installed APIs
trigger: framework:monkeyslegion
priority: 50
---
Target PHP 8.4 and PostgreSQL 16 or newer. Verified skeleton release is 2.1.6, commit daac8b5d557b4eaf9c62ff6200276b058c7717ad in MonkeysCloud/MonkeysLegion-Skeleton. Skeleton and framework versions are distinct: inspect composer.json and the reviewed lock before coding; marketplace evidence resolved framework 2.1.4 and database 2.2.0, not a universal dependency guarantee.

Read installed routes, DI, configuration and tests before using APIs; do not invent framework classes. Keep controllers thin, validate input, use parameterized queries, preserve authentication and database role separation. No install scripts, key generation or migrations without explicit approval. Never echo secrets. Preserve the upstream MonkeysCloud name and MIT attribution when copying skeleton material. Validate syntax, boot and API contracts on the target PHP version and an isolated database; local PHP 8.5 or PostgreSQL 18 results are not PHP 8.4/PG16 evidence.
