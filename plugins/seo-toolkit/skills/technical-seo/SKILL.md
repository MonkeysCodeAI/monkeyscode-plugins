---
name: Technical SEO
description: Crawlability, indexation, metadata, rendering and Core Web Vitals. Use when editing page metadata, robots.txt, sitemaps, canonicals or SSR for SEO.
trigger: manual
---
# Technical SEO for web codebases

Detect the stack first: framework and version (Next.js App/Pages Router, Nuxt, Astro, SvelteKit, Remix, Laravel/Blade, Drupal, WordPress, static site generators), rendering mode per route (static, ISR, SSR, client-only) and where metadata is produced. Follow that framework's metadata APIs (for example Next.js `generateMetadata` and `app/sitemap.ts`/`robots.ts`) rather than hand-rolled head tags.

## Crawl and index
- Indexable content must be present in the server-rendered HTML; do not rely on client-side fetching for primary content, links or metadata.
- Links are real `<a href>` elements with crawlable URLs, not click handlers.
- `robots.txt` controls crawling, not indexing; use `noindex` (meta or `X-Robots-Tag`) to keep a page out of results and do not block that page in robots.txt at the same time.
- Every indexable page has one self-referencing absolute canonical; parameter, sort and tracking variants canonicalize to the clean URL. Avoid canonical chains and canonicals to redirected or noindexed URLs.
- Return correct status codes: 404/410 for missing content (no soft 404s), 301/308 for permanent moves, no redirect chains; preview, staging and search-result pages are noindexed.
- XML sitemaps list only canonical, indexable, 200-status URLs with accurate `lastmod`; split above 50,000 URLs or 50 MB and reference them from robots.txt.
- International sites: reciprocal `hreflang` including `x-default`, matching canonicals, and `lang` on `<html>`.

## On-page
- Unique, descriptive `<title>` (about 50–60 characters is a display guideline, not a rule) and meta description per page; no duplicate templates across many URLs.
- One clear `h1` and a logical heading outline; descriptive link text; meaningful image `alt`.
- Clean, lowercase, hyphenated, stable URLs; avoid exposing internal IDs where a slug works.
- Open Graph and Twitter/X card tags with absolute image URLs of adequate size.

## Performance and page experience
Core Web Vitals "good" thresholds at the 75th percentile of real users: LCP ≤ 2.5 s, INP ≤ 200 ms (INP replaced FID in March 2024), CLS ≤ 0.1.
- LCP: identify the LCP element; preload or prioritize it (`fetchpriority="high"`), do not lazy-load it, serve modern image formats at correct sizes, reduce render-blocking CSS/JS and server response time.
- INP: break up long tasks, defer non-critical third-party scripts, minimize hydration cost, keep event handlers light and yield to the main thread.
- CLS: explicit width/height or `aspect-ratio` on media and embeds, reserved space for ads and banners, `font-display` with metric-compatible fallbacks.
Lab tools (Lighthouse) are diagnostics; field data (CrUX, RUM) is what is assessed. Never report scores you did not measure.

## Mobile and security
Responsive viewport meta, readable font sizes, no intrusive interstitials, HTTPS everywhere with HSTS, no mixed content.

Recommendations are proposals with expected impact and verification steps. Rankings depend on factors outside the codebase; never promise ranking or traffic outcomes.
