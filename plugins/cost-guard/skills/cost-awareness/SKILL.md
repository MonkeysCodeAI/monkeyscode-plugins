---
name: Cost Awareness
description: Targeted context and honest cost reporting. Use when a task spans a large codebase or the user asks about token usage, cost or budgets.
trigger: manual
---
# Efficient context
Search for exact symbols or filenames before reading large files. Read bounded relevant ranges and direct dependencies, avoid generated/vendor trees, and summarize evidence without repeating full files. Reuse known facts within the current task and ask for scope when a request is ambiguous.

Use the smallest adequate workflow, but never skip required validation or safety checks to save tokens. Do not invent prices, dollar thresholds or usage estimates. A host's optional costUsd metadata may be missing, stale or untrusted; report it only as advisory information, not a bill or enforced budget.

The Stop hook reports a bounded numeric value only when present and valid. It always exits successfully and never blocks Stop. Use host-supported budgets and authoritative provider billing independently when a real spending limit is needed.
