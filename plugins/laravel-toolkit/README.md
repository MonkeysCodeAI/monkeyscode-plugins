# Laravel Toolkit

Draft 1.0.0 by MonkeysCode (MIT). Use `/artisan migrate` to get a version-aware command proposal, select the manual Laravel Toolkit skill for implementation advice, or delegate static review to `laravel-reviewer`.

The command and reviewer allow only file reading/search; they do not execute Artisan or edit files. Advice covers policies, tenant scope, queries, migrations, queues and tests. Database changes and execution require a separate task, confirmed environment and normal host approval. Review is not a security guarantee.

Supports IDE 1.3.10, Code Agent 1.1.8 and CLI 1.1.10; these are product minimums, not a claim of completed app acceptance tests. No hooks, MCP, bundled executables, network integration, environment inputs or extra dependencies. User-requested tests or framework tools may access services under host policy. Do not expose .env contents.

Original package text and static SVG; no vendored framework code. Framework names identify compatibility, not affiliation. Publishing, rights review, signing and cross-app acceptance remain release gates.
