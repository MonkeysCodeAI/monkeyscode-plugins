# Debugger

Evidence-driven root-cause analysis: reproduce, hypothesize, bisect, fix minimally and prevent regressions.

`/debug` guides a scientific debugging loop from supplied symptoms, logs or stack traces. The **Root Cause Analysis** skill covers reading stack traces, log correlation, flaky tests, concurrency and `git bisect`. The `bug-hunter` plan-mode agent investigates read-only.

The plugin never runs commands itself; it proposes exact commands for the user to run and asks for their output. Fixes are proposed with a regression test and are not claimed verified without evidence.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
