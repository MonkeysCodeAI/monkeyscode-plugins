# Changelog

## 1.0.1 — 2026-11-02

- Rewrite all 24 skill descriptions to say what each skill covers and when to use it, within the 160-character skill index budget.
- Prompt bodies are byte-identical to 1.0.0 (prompt hashes unchanged); only metadata is re-baselined.
- Existing enable choices and user-edited descriptions or prompts are preserved.

## 1.0.0

- Package the 24 existing shared skills as declarative SKILL.md content.
- Preserve original prompt bytes and metadata against a SHA-256 baseline.
- Generate host definitions from the shared content without changing IDE or Agent Manager defaults or existing user overrides.
- Expose a consent-gated CLI bundled-content migration adapter; automatic first-run onboarding is not yet integrated.
- Document application-packaged provenance separately from marketplace signatures and trust.
