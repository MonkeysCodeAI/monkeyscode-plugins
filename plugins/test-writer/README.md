# Test Writer

Version 1.0.0 provides `tests <target paths> <behavior>`, a read-only `test-writer` agent and a manual test-patterns skill. The command is marked Capuchin-preferred. It detects existing local frameworks and returns deterministic file-by-file drafts, not applied tests.

## Compatibility and capabilities

Targets IDE >=1.3.10, agent >=1.1.8 and CLI >=1.1.10. Tools: `read_file`, `grep_search`, `glob_files` only. Agent permission mode: `plan`. No executable hooks, MCP, shell, network or editing tools. Host policy remains authoritative.

## Safety and manual local test

No hidden installs, new runner assumptions, live service calls or fabricated pass/coverage claims. Use synthetic redacted fixtures and isolated state. Review generated assertions before applying them yourself.

Load locally on each target host, verify discovery and capability report, and invoke the command against disposable projects with different installed test frameworks. Confirm conventions are detected and boundary/negative tests are drafted. Try a project without a runner: it should ask rather than install. Verify the agent cannot execute or edit. Apply drafts separately only if authorized and run existing local tests yourself. These checks were not executed here. No signing, publication or approval claim is made.
