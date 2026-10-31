---
description: Update a changelog from verified changes
argument-hint: [range and destination]
allowed-tools: read_file, grep_search, search_files, list_directory, edit_file, create_file, run_command(git diff:*), run_command(git log:*)
---
For $ARGUMENTS, read the existing changelog and verified local commit range. Ask for the range or destination if ambiguous. Group user-visible additions, fixes and breaking changes in the existing format; exclude internal noise and secrets. Do not invent release dates, version approvals or issue links. Draft an Unreleased section unless a release version is explicitly supplied. Preserve unrelated entries and dirty edits, write only the requested documentation, and summarize the diff and evidence. Never stage, commit, tag, push or run a formatter automatically.
