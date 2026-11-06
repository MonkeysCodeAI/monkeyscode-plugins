---
name: Design System Tokens
description: Design tokens and component variants grounded in the codebase. Use when adding colors, type scales, spacing or variants, or unifying inconsistent UI.
trigger: manual
---
# Design tokens and component consistency

Inventory before inventing. Search for theme files, CSS custom properties, Tailwind config (`theme.extend`, `@theme` in Tailwind v4), CSS-in-JS themes, Figma-exported token JSON and component libraries (shadcn/ui, Radix, MUI, Chakra, Vuetify, etc.). Record the versions actually installed and follow their conventions.

Organize tokens in three layers:
1. **Primitive:** raw palette steps, font families, size steps, spacing steps, radii, shadows, durations and easings.
2. **Semantic:** roles such as `color-bg`, `color-surface`, `color-text`, `color-text-muted`, `color-accent`, `color-danger`, `focus-ring`, `space-section`. Components consume only this layer.
3. **Component:** narrow overrides (for example `button-primary-bg`) only where a component truly diverges.

Guidelines:
- Prefer perceptual color spaces (OKLCH) for generating even palette steps when the project's browser targets support them; provide fallbacks otherwise.
- Pair every surface color with an approved text color and verify contrast by calculation; report the ratios you computed.
- Theme switching (light/dark/high-contrast) swaps semantic tokens, never component code.
- Keep the scale small. Collapse near-duplicate values (for example 14 grey shades or 9 radii) and propose a migration map from old literal values to tokens.
- Component variants use a single API (size, tone, emphasis) instead of ad-hoc props; document allowed combinations.
- Do not rename or remove existing public tokens without a deprecation path; show every consumer that would change.

Deliver: a token table (name, value, role), the files to change, a migration list of hard-coded values found with path and line, and suggested visual regression or story checks. Changes are proposals until the user approves edits through normal host permissions.
