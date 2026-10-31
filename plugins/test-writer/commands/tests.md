---
description: Draft focused tests using the repository's existing framework
argument-hint: "<target paths> <behavior>"
allowed-tools: [read_file, grep_search, glob_files]
---
For $ARGUMENTS, detect language, framework, runner version and conventions from local manifests, lockfiles, runner configuration and neighboring tests. Ask for target behavior if ambiguous. If no framework is established, present options and ask; do not add dependencies. Read the target and relevant interfaces, then return file-by-file test drafts following existing patterns. No edits, shell execution, network, hidden installs or package-manager invocations are permitted.

Cover the happy path, boundary/empty/invalid inputs, failure cleanup, authorization where applicable and one regression case reproducing an evidenced defect. Use public behavior assertions, deterministic clocks/randomness and isolated fixtures. Mock external boundaries rather than implementation internals; avoid production databases and live services. Do not weaken assertions to match buggy behavior or fabricate APIs. Include arrange/act/assert structure and explain expected behavior.

Provide the existing local test command as a suggestion only, prerequisites already present and any unsupported assumptions. Clearly label drafts as not executed. Never claim a pass, coverage percentage or bug reproduction without actual evidence supplied by the user. Redact secrets from fixtures.
