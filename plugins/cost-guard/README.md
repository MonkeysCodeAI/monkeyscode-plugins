# Cost Guard

Draft 1.0.0 by MonkeysCode (MIT). Select the manual Cost Awareness skill for targeted context advice. The declared Stop hook runs `node "${CLAUDE_PLUGIN_ROOT}/scripts/cost-warning.mjs"`; enabling this package therefore requires executable trust and Node.js available on PATH. No dependencies are installed.

The hook reads at most 64 KiB of JSON stdin, waits at most one second for input, and accepts an optional numeric `costUsd` at the top level or in `metadata`. Values must be finite, nonnegative and at most 1,000,000; this is an input/output bound, **not a budget threshold**. Missing, malformed, oversized or unsupported input is unknown and silent. Valid values produce one bounded generic advisory on stderr. No input strings are echoed, and stdout carries no control output.

The script always exits 0 and never blocks Stop. Reported metadata is not trusted billing, a verified estimate or spending enforcement. Hosts may omit cost metadata or hide stderr; then no warning is visible. Use independent host budgets/provider billing for real limits.

Supports IDE 1.3.10, Code Agent 1.1.8 and CLI 1.1.10, pending executable and app acceptance. The hook root comes from host-provided CLAUDE_PLUGIN_ROOT; no other environment input, network, file access, MCP or third-party source is used. Original text, script and static SVG. Rights review, approval and signing remain release gates.
