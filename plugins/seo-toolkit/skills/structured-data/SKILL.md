---
name: Structured Data
description: Honest schema.org JSON-LD matching visible content. Use when adding or fixing structured data, rich result markup or JSON-LD on a page.
trigger: manual
---
# Structured data (schema.org JSON-LD)

Prefer JSON-LD in a `<script type="application/ld+json">` rendered on the server. Generate it from the same data that renders the page so markup and visible content cannot drift. Escape `<` in serialized JSON to prevent script injection when values come from users or a CMS.

Choose types by what the page actually is:
- Site-wide: `Organization` (name, url, logo, sameAs) and `WebSite` on the home page.
- Content: `Article`/`BlogPosting`/`NewsArticle` with headline, image, datePublished, dateModified and author (`Person` with url) — supports E-E-A-T signals through clear authorship.
- Commerce: `Product` with `Offer` (price, priceCurrency, availability) and `AggregateRating`/`Review` only when real, on-page reviews exist.
- Navigation: `BreadcrumbList` matching visible breadcrumbs.
- Other common types: `LocalBusiness`, `Event`, `JobPosting`, `SoftwareApplication`, `VideoObject`, `Recipe`, `Course`, `Dataset`.

Rules:
- Mark up only content visible to users; never invent ratings, prices, authors, dates or FAQs.
- Rich result eligibility changes over time and is never guaranteed. Google restricted FAQ rich results to a limited set of authoritative sites and retired HowTo rich results in 2023; FAQPage markup may still help machine understanding but should not be sold as a visual result. Since 2025 Google has also been phasing out visual features for less-used types (for example Course Info, Claim Review, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing and Practice Problem). Check Google's current search gallery before promising any rich result, and keep valid schema.org markup where it describes the page truthfully.
- Use absolute URLs, ISO 8601 dates, stable `@id` values to connect entities across pages.
- Validate with the Schema.org validator and Google's Rich Results Test; report validation only when actually run.

Deliver JSON-LD drafts with the component or template that should emit them, the data source for each property, and the validation steps to perform.
