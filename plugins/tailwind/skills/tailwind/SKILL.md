---
name: Tailwind CSS
description: Tailwind CSS v4 theming, tokens, variants and v3 migration. Use when writing Tailwind classes, editing @theme or upgrading from Tailwind v3.
trigger: manual
---
# Tailwind CSS

- **v4 setup:** `@import "tailwindcss";` and tokens in `@theme { --color-brand-500: oklch(...); --font-display: ...; }`. Tokens become utilities and CSS variables automatically. Automatic content detection; use `@source` for extra paths.
- **v3 → v4:** use the official upgrade tool, then review renamed utilities, default border/ring color changes, removed deprecated utilities and plugin API changes. Browser targets are modern evergreen.
- **Tokens:** semantic names (`bg-surface`, `text-muted`) over raw palette in components. No arbitrary values when a token exists.
- **Variants:** `hover:`, `focus-visible:`, `aria-*:`, `data-*:`, `group-*`/`peer-*`, `dark:` (class or media strategy), container queries `@container` + `@md:`.
- **Class hygiene:** full static class names only (no string concatenation); sort with the official Prettier plugin; merge conflicts with `tailwind-merge` in component APIs; variants with `cva` or similar.
- **Components:** extract into framework components, not `@apply` chains; reserve `@apply` for third-party markup.
- **Accessibility:** visible focus styles, sufficient contrast from tokens, `motion-safe:`/`motion-reduce:`.
