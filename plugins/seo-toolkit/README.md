# SEO Toolkit

Draft 1.0.0 by MonkeysCode (MIT). Evidence-based search readiness for web codebases, covering classic technical SEO and AI answer engines.

- `/seo-audit app/blog/[slug]` — read-only audit of indexability, metadata, structured data, Core Web Vitals risks, AI-search readiness and i18n, with path/line evidence and a prioritized plan.
- `/schema app/products/[id]/page.tsx Product` — JSON-LD draft mapped field-by-field to the page's real data.
- `/meta app/pricing/page.tsx` — title, description, heading and answer-first summary proposals.
- **Technical SEO**, **Structured Data** and **AI Search Readiness** skills (manual).
- `seo-auditor` agent — read-only (`plan` permission mode) for delegation.

Commands and the agent read/search files only. They do not edit files, run Lighthouse, crawl URLs or call SEO APIs; live checks (Search Console, Rich Results Test, PageSpeed Insights/CrUX) are listed as verification steps for you to run. Guidance distinguishes established practice from proposals such as `llms.txt`, and never promises rankings, traffic or rich results.

Supports IDE 1.3.10, Code Agent 1.1.8 and CLI 1.1.10, pending cross-app acceptance. No hooks, MCP, executables, environment inputs or dependencies.

Original text and static SVG, no vendored third-party content or implied affiliation with any search engine. Rights review, signing and publishing approval remain release gates.
