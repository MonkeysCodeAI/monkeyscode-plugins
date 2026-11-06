---
name: Performance Profiling
description: Measure first with profilers, query plans, bundle analysis and load tests. Use when something is slow, memory grows or a performance budget is at risk.
trigger: manual
---
# Performance profiling

Measure, change one thing, measure again. Set a budget (p95 latency, memory, bundle size, Core Web Vitals) before optimizing.

## Backend
- **Databases:** `EXPLAIN (ANALYZE, BUFFERS)` in PostgreSQL, `EXPLAIN ANALYZE` in MySQL 8; look for sequential scans on large tables, row estimate errors, sorts spilling to disk. Index for the filter + sort, not each column. Watch query counts per request.
- **Profilers:** Node `--cpu-prof`/clinic, Python py-spy/cProfile, Go pprof, PHP Xdebug/Blackfire/SPX, JVM async-profiler/JFR, .NET dotnet-trace, Rust cargo-flamegraph. Read flame graphs by width, not height.
- **Tracing:** OpenTelemetry spans around I/O to find where wall time goes.
- **Caching:** cache by explicit key with TTL and invalidation; beware stampedes (use locks or stale-while-revalidate).
- **Load testing:** k6, Locust, Gatling, wrk against staging with realistic data; report p50/p95/p99 and error rate, not averages.

## Frontend
- Bundle analysis (`source-map-explorer`, framework analyzers); remove duplicates, lazy-load routes and heavy widgets, prefer native APIs over large libraries.
- Images: modern formats, explicit dimensions, responsive `srcset`, priority only for the LCP image.
- Rendering: avoid long tasks (>50 ms), virtualize long lists, memoize expensive components, move work off the main thread.
- Use field data (RUM, CrUX) to confirm lab findings.

## Memory
Heap snapshots compared over time; look for growing retainers. Bound every cache and queue.
