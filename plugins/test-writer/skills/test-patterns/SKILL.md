---
name: Test patterns
description: Deterministic tests grounded in existing repository conventions
trigger: manual
---
Detect framework and version from local manifests, runner config and nearby tests; do not assume Jest, Vitest, PHPUnit or pytest. Match existing fixture and assertion conventions. Assert public outcomes, use arrange/act/assert, table-driven boundary cases and explicit failure/cleanup assertions. Control time and randomness; isolate filesystem/database state and mock network boundaries. Keep regression tests failing for the actual defect rather than implementation details. Do not snapshot secrets or large opaque payloads. Ask for intended behavior when unspecified. Drafts are not executed results: no fabricated coverage or pass claims, no hidden dependency installs or network activity.
