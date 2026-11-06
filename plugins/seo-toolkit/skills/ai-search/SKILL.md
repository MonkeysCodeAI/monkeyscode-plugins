---
name: AI Search Readiness
description: Make content citable by AI answer engines (GEO/AEO). Use when optimizing for AI Overviews or ChatGPT search, or setting AI crawler rules in robots.txt.
trigger: manual
---
# AI search and answer-engine readiness

AI answer surfaces (Google AI Overviews and AI Mode, ChatGPT search, Perplexity, Copilot, Claude) still depend on content that is crawlable, server-rendered and clearly structured. Strong technical SEO is the foundation; there is no separate secret markup.

## Crawler access policy
Decide deliberately, per business goal, and document the choice in robots.txt:
- Search and answer retrieval agents (for example `OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`) affect whether content can be cited.
- Training-oriented agents (for example `GPTBot`, `ClaudeBot`, `CCBot`) and the `Google-Extended` token control model-training use; blocking `Google-Extended` does not remove pages from Google Search.
- User-agent names change; verify current names in each vendor's documentation before editing and remember robots.txt is advisory. Check that CDN/WAF bot rules are not silently blocking agents the policy allows.

## Content that gets cited
- Answer the core question directly near the top of the page, then expand. Use descriptive headings that mirror real questions.
- Prefer specific, verifiable facts: numbers with sources, dates, definitions, comparisons in HTML tables, steps in ordered lists.
- Show authorship, credentials, first-hand experience, and last-updated dates; keep facts current.
- Keep one topic per URL with consistent entity names across the site and structured data.
- Avoid content hidden behind client-only rendering, tabs that require scripts to load, or interstitials.

## llms.txt
`/llms.txt` is a community proposal: a Markdown index of key pages for language-model tools. It is cheap to add and can help developer-documentation tools, but no major search engine has committed to using it for ranking or citation. Offer it as optional; never present it as a ranking factor.

## Measurement
Recommend tracking referral traffic from AI assistants in analytics, citation spot-checks for target queries, and server logs for agent crawling. Do not fabricate visibility metrics or claim citation outcomes.
