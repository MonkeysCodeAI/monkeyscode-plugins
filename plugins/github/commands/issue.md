---
description: Draft an issue from repository evidence
argument-hint: [problem]
allowed-tools: read_file, grep_search, search_files, list_directory
---
Draft a GitHub issue for $ARGUMENTS from local source and user-provided evidence. Confirm repository and expected versus actual behavior. Include a minimal reproduction, sanitized logs, environment, impact and acceptance criteria. Do not invent remote issue contents or access credentials. This tool subset cannot publish remotely; return a copyable draft. Publishing or editing an issue requires explicit approval in a separately permitted workflow after connector review. The official MCP supports writes and is not a read-only security boundary.
