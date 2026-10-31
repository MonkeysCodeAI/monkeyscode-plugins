---
description: Triage sanitized Sentry evidence and write a regression fix
argument-hint: [issue identifier or evidence]
allowed-tools: read_file, grep_search, search_files, list_directory, edit_file, create_file
---
Investigate $ARGUMENTS from user-supplied sanitized stack traces and local source. If remote evidence is needed, explain that packaged Sentry MCP is disabled and OAuth requires manual setup through the existing supported MCP flow; do not pretend a connection exists. Avoid copying PII, request bodies or tokens into code or reports. Locate the failure, distinguish observed facts from hypotheses, write a minimal regression test and bounded fix after confirming scope. Report test commands for separate approval, not invented results. Never resolve remote issues, deploy or change alerts automatically.
