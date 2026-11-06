# Performance

Find backend and frontend performance problems: N+1 queries, hot paths, bundle weight, memory leaks and caching.

`/perf-audit` statically reviews a scope for likely performance problems and proposes measurements to confirm them. The **Performance Profiling** skill explains profilers, query plans, bundle analysis and load testing per stack.

Static review finds candidates, not measured regressions. The plugin never runs profilers or load tests; it tells you what to run and how to read the result.

## Permissions and limits
Commands are scoped to `read_file`, `grep_search` and `glob_files`; agents run in `plan` mode. No hooks, scripts, MCP servers or network access. Outputs are proposals and drafts; nothing is claimed executed, verified or passing without evidence supplied by the user. Targets IDE 1.3.10, Agent 1.1.8 and CLI 1.1.10. Original content is MIT. Release review, scanning and signing are pending.
