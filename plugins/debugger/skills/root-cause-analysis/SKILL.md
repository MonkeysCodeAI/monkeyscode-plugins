---
name: Root Cause Analysis
description: Stack traces, logs, flaky tests, concurrency bugs and git bisect. Use when a bug, crash, regression or intermittent failure needs a root cause.
trigger: manual
---
# Root cause analysis

## Stack traces
Read from the innermost frame in project code outward. Note the exception type and message exactly. For async code, look for the originating await or callback; for minified code ask for source maps.

## Logs
Correlate by request or trace ID and timestamp across services. Look for the first anomaly, not the loudest. Check clock skew before trusting ordering.

## Classes of bug and first checks
- **Off-by-one / boundary:** empty, single, max and negative inputs.
- **Null / undefined:** optional data from APIs, databases and config.
- **State and caching:** stale cache, memoization keys, global mutable state, missing invalidation.
- **Concurrency:** races, missing locks, non-atomic read-modify-write, unawaited promises, goroutine leaks, deadlocks. Reproduce with stress loops and added delays.
- **Time:** timezones, DST, leap days, locale formatting, monotonic vs wall clock.
- **Environment:** version drift, feature flags, env vars, file permissions, case-sensitive paths.
- **Flaky tests:** shared fixtures, order dependence, real clocks, network, randomness without seed, timeouts.

## Bisecting
`git bisect start; git bisect bad; git bisect good <ref>` then mark each step, or `git bisect run <script>` with a deterministic check. Bisect configuration and data too, not only commits.

## Writing it up
Symptom → root cause → why it happened → fix → regression test → follow-ups. Keep it factual and blameless.
