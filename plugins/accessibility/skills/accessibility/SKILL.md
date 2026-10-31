---
name: Accessibility Review
description: Practical WCAG-oriented component design and testing
trigger: manual
---
# Accessible components
Prefer native links, buttons and form controls over recreating behavior with ARIA. Ensure visible labels and meaningful accessible names; use ARIA only when semantics require it. Keep keyboard access, visible focus and logical focus order intact.

For dialogs and menus, follow the project's established accessible primitives and verify focus entry, containment where appropriate, Escape behavior and focus restoration. Announce validation errors without removing field context; do not rely solely on color. Respect reduced motion and maintain zoom/reflow behavior.

Static code cannot prove rendered contrast, accessible-name computation or screen-reader behavior. Suggest measured contrast and real keyboard/assistive-technology checks, with expected outcomes. Report automated tool results only if actually obtained. A clean checklist is not certification of WCAG compliance; document scope and limitations.
