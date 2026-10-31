---
name: Next.js Toolkit
description: App Router, RSC and caching decisions grounded in installed versions
trigger: manual
---
# Next.js application workflow
Inspect package.json, lockfile, next configuration and adjacent routes. Determine whether the project uses App Router or Pages Router and follow its installed version's conventions.

Keep components server-side unless interaction requires a client boundary. Never pass secrets or nonserializable server objects into client props. Validate and authorize server actions and route handlers independently of UI visibility.

Specify caching per data source: freshness need, user/tenant scope, invalidation and failure behavior. Do not assume fetch or route defaults across Next.js versions. Never cache personalized responses under shared keys. Keep server-only dependencies out of client bundles.

For routes, include loading, error and not-found states where appropriate. Validate route parameters, encode links, and preserve metadata and accessibility. Test success, malformed input, unauthorized access and stale-data behavior. Use the project's test runner and build checks only with normal approval; distinguish proposed checks from results.
