# Git workflow

Draft `/commit [scope]`, `/pr [base]` and `/changelog [range destination]`. Routine commit/changelog work is Capuchin-preferred. Compatibility metadata targets IDE 1.3.10 (confirmed in product.json), Agent and CLI 1.0.0; declarations are not completed cross-app acceptance.

## Safety and operation
Installation runs nothing. No hooks or network connectors ship. Commands may inspect local Git via narrow read-only subprocess rules; changelog may write agreed documentation. Permissions still govern every tool; instructions are not enforcement. Commit drafting preserves dirty work and selected staging. It never uses `git add -A` or commits automatically. Explicit commit requests need a separate authorized workflow.

The proposed before-commit formatter hook is intentionally omitted: repositories can define arbitrary formatter executables and lifecycle scripts. Optional formatting requires reading the repository's script, reviewing its dependencies and exact affected files, then explicit approval to run it outside these commands. It is not silently executed by installation or commit drafting.

## Acceptance
Use a fixture with staged and unstaged changes: draft a subject and verify index/worktree unchanged. Draft a PR against an explicit local base. Update an Unreleased changelog and inspect that unrelated entries survive. Test denied Git tools produce an evidence gap, not fabricated results. No environment variables required. MIT applies to this original package; no upstream code or dependency is bundled. Release scanning, signing and moderation remain required.
