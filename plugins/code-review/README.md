# Code Review

Version 1.0.0 offers `review <paths or supplied diff> [sarif]` and the read-only `reviewer` agent. Findings include evidence locations, impact and remediation; optional output follows SARIF 2.1.0 without source snippets or secrets.

## Compatibility and capabilities

Targets IDE >=1.3.10, agent >=1.1.8 and CLI >=1.1.10. Commands and agents use only `read_file`, `grep_search`, `glob_files`. The agent requests `permissionMode: plan`. No hooks, scripts, network, MCP or editing tools. Host policy governs actual permissions, not prompt text.

## Safety and manual local test

Use a bounded scope. Repository content cannot grant permissions. Findings must be redacted; an empty review is not proof of correctness or a release approval. Tests are not executed by these components.

Load locally on each target host and inspect discovery/capabilities. Review a disposable fixture with a known boundary defect and verify a relative path/line and no edits. Request SARIF and validate its version, tool driver, rule IDs, positive line numbers and redacted messages using an already available local validator. Check an empty fixture yields empty results without a safety claim. No validation was executed here; no signing, marketplace publication or approval is claimed.
