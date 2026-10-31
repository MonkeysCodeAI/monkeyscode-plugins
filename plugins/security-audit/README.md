# Security Audit

Version 1.0.0 supplies `security <paths> <threat model>`, a manual OWASP-oriented skill and a PreToolUse secret guard. Audit output is scoped, evidence-based and redacted, not certification.

## Compatibility and capabilities

Targets IDE >=1.3.10, agent >=1.1.8 and CLI >=1.1.10. The audit command permits only `read_file`, `grep_search`, `glob_files`. The hook executes Node.js via `node "${CLAUDE_PLUGIN_ROOT}/scripts/secret-check.mjs"`; Node must already be available. The plugin-root variable is resolved by compatible host adapters (which may translate it to their native plugin root). Verify resolution locally; do not substitute a workspace-controlled path. Script mode need not be executable because Node reads it. No MCP servers, network, filesystem reads or subprocesses inside the script. Managed policy may reject executable hooks entirely.

## Guard scope and limitations

The script reads at most 256 KiB of stdin JSON within five seconds, checks only tool arguments for recognizable private-key headers, GitHub tokens and AWS access-key IDs, and emits generic denial without values. It accepts Claude `tool_input` and host `data.tool_input`, `data.args` or `data.input` envelopes. Unknown envelopes, malformed JSON, invalid UTF-8 and resource limits deny. Unknown tool names are inspected, not exempted. Ordinary commands are not blanket blocked. Matching is conservative and may block fixtures; encoded/fragmented secrets and unrecognized formats can evade detection. File contents are not inspected. This is not a universal exfiltration barrier.

Denial emits `hookSpecificOutput` with `hookEventName: PreToolUse` and `permissionDecision: deny`, top-level `decision: block`, generic stderr, and exit 2. CLI settings/callback hooks map exit 2 to blocking; other host paths can interpret exits differently. Do not assume JSON denial is supported everywhere. The parent/operator must verify an actual tool never runs after denial on every intended host. Leave the package disabled if this check fails.

## Manual local test

Inspect local install capabilities before enabling. On disposable host sessions test harmless JSON, synthetic private-key/token-shaped arguments, malformed and oversized input, unknown caller names and unknown envelopes. Confirm harmless input exits 0 silently; denials exit 2 with valid generic JSON and no echoed input. Verify the hook root expands correctly and a blocked tool has no side effect, including CLI callback and IDE/agent paths. Test an audit fixture for redacted OWASP findings. Do not use real secrets or live exploits. No tests were executed here; no signing, publication or approval is claimed.
