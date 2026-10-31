---
description: Explain an Artisan task using this project's Laravel version
argument-hint: "[task]"
allowed-tools: read_file, grep_search, search_files
---
For $ARGUMENTS, read composer.json and relevant application files. Identify the installed Laravel version and propose the appropriate Artisan command with expected effects and prerequisites. This helper only inspects files: it does not run Artisan or modify code.

Separate generation, cache, queue and database operations. Flag destructive flags, production effects, schema locks and credential exposure. Never insert --force as an approval bypass. If execution is needed, ask the user to confirm the target environment and obtain normal tool approval outside this read-only command. Return the proposed invocation, risks and a verification checklist; do not claim execution.
