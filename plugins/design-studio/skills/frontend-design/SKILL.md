---
name: Frontend Design
description: Deliberate visual direction that avoids generic, templated UI. Use when designing a new page, landing page or component, or restyling existing UI.
trigger: manual
---
# Designing interfaces with a point of view

## 1. Start from the subject, not a template
Before writing markup, state in one or two sentences: what the product is, who uses it, and the single job this screen must do. If the request does not say, propose an answer and ask for confirmation. Distinctive choices come from the subject's own world — its materials, vocabulary, artifacts and audience. A tool for logistics dispatchers and a picture-book shop should not share a palette, type or rhythm. Use real or realistic content from the brief throughout; lorem ipsum hides layout problems.

Read the repository first: existing tokens, theme files, Tailwind/CSS variables, component libraries and brand guidance. When a design system exists, extend it instead of inventing a parallel one; the brief and the established brand always win over this skill's taste.

## 2. Plan before building
Produce a compact design plan and review it before code:
- **Color:** 4–6 named values (base, surface, text, muted text, one accent, optional semantic colors) with intended roles. Check text/background pairs against WCAG 2.2 contrast targets (4.5:1 body, 3:1 large text and UI boundaries) and state that values are computed, not assumed.
- **Type:** one or two families with clear roles, a modular scale (for example 1.2 or 1.25 ratio), weights, line-height and tracking. Body line length roughly 45–80 characters.
- **Space and shape:** a spacing scale (4 or 8 px base), a radius scale that varies with hierarchy, and an elevation scale used sparingly.
- **Layout:** a one-sentence concept plus a small ASCII wireframe for each key breakpoint, with alignment rules.
- **Principle:** the one memorable idea that makes this screen specific to its subject.

Then challenge the plan: if a similar prompt for a different product would yield the same plan, it is a default, not a choice — revise that part and say why.

## 3. Recognize generated-looking defaults
These are legitimate when the brief asks for them, but should never appear by reflex:
- Identical rounded cards with one radius and one soft grey shadow for every block; gradient washes as decoration.
- A hero built from a giant number, small label, three stat tiles and a gradient blob.
- An all-caps tracked eyebrow above every heading; numbered markers (01/02/03) on content that is not a sequence.
- One highlighted word in each headline; arrows appended to every link; middle-dot meta strings everywhere.
- Fade-and-slide-up on every section and hover lift on every card.
- Purple-to-blue gradients on near-black, or cream backgrounds with a terracotta accent, chosen without a reason.

## 4. Build with craft
- Use semantic HTML and the project's primitives. Express tokens as CSS custom properties or the framework's theme config, never as scattered literals.
- Keep selector specificity flat and predictable; prefer layout utilities (grid, flex, gap) over margin hacks; avoid competing section/element rules.
- Responsive by construction: fluid type with `clamp()`, container queries where supported by the project's targets, no horizontal scroll at 320 px, touch targets at least 24×24 CSS px (44 preferred).
- Motion: one orchestrated moment beats scattered effects. Motion that responds to user action and explains a change is welcome. Honor `prefers-reduced-motion`; animate `transform`/`opacity`, not layout properties.
- Support dark mode only if the project does; derive it from tokens rather than inverting colors.
- Images: explicit dimensions or aspect-ratio to prevent layout shift, modern formats, meaningful `alt` or empty alt for decoration.
- States are design: hover, focus-visible, active, disabled, loading, empty, error and success for every interactive element.

## 5. Words are part of the design
Write in sentence case, active voice and the user's vocabulary ("Manage alerts", not "Webhook configuration"). A button names its outcome ("Save changes", not "Submit") and the confirmation reuses that verb. Errors say what happened and how to fix it, without apologizing or blaming. Empty states invite the next action.

## 6. Critique and restraint
Spend boldness in one place and keep the rest quiet. Before finishing, remove one decorative element that does not serve the brief. If screenshots or a browser preview are available through approved host tooling, review the rendered result at mobile and desktop widths; otherwise list the visual checks that still need a human. Never claim pixel-perfect output, measured contrast or performance numbers without actual evidence.
