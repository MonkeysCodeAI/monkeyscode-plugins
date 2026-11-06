# Design Studio

Draft 1.0.0 by MonkeysCode (MIT). Helps agents produce intentional, subject-specific interfaces instead of templated defaults.

- `/design-plan "pricing page for a dev-tools startup"` — brief, token plan, ASCII wireframes and a self-check before any code is written.
- `/design-review src/components/Hero.tsx` — read-only critique of hierarchy, typography, color, spacing, states, motion, copy and generic tells, with path/line evidence.
- **Frontend Design** skill (manual) — guidance for building with a point of view: plan, challenge defaults, build with craft, critique.
- **Design System Tokens** skill (manual) — inventory, layer and migrate tokens and component variants.
- `design-critic` agent — read-only (`plan` permission mode) reviewer for delegation.

Commands and the agent read/search files only. They do not edit files, run builds, open browsers or use the network; implementation and screenshot review require separate approved tasks and host tooling. Contrast ratios are reported only when computed from known values; nothing here certifies accessibility or brand compliance — pair with the Accessibility package for WCAG review.

Supports IDE 1.3.10, Code Agent 1.1.8 and CLI 1.1.10, pending cross-app acceptance. No hooks, MCP, executables, environment inputs or dependencies.

Original text and static SVG, no vendored third-party content. Rights review, signing and publishing approval remain release gates.
