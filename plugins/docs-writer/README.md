# Docs writer

Use `/docs [topic destination]`, `/readme [project]` and `/api-reference [area destination]` to write source-grounded documentation. All are Capuchin-preferred. Code Agent Documents output uses `.monkeyscode/docs` only when chosen by the user; ordinary repositories retain their own documentation layout.

Installation runs nothing. There are no executables, hooks, MCP servers or network calls. Commands can read local source and write selected documentation under host permission policy. They cannot execute examples or retrieve remote contracts. No credentials or environment inputs are required. Prompt guidance is advisory, not a filesystem sandbox.

## Workflow and checks
Confirm audience and destination, inspect implementation and tests, write a minimal accurate guide, then review the diff. Try a fixture with an implemented endpoint and an unimplemented proposal: only the real endpoint should enter the reference. Ensure existing README attribution and user edits survive. Verify examples contain no secrets and distinguish observed tests from unexecuted commands.

Targets: IDE 1.3.10, Agent/CLI 1.0.0. Product version was read from the IDE product metadata; cross-app acceptance and publication still require release evidence. Original content is MIT; no dependency source is bundled.
