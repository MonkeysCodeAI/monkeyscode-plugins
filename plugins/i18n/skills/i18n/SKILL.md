---
name: Internationalization
description: ICU messages, locale formatting, RTL and translation workflow. Use when adding user-facing strings, translations, locales, dates, currency or RTL.
trigger: manual
---
# Internationalization

- **Messages:** whole sentences with placeholders, never concatenation. ICU MessageFormat for plurals and selects: `{count, plural, one {# file} other {# files}}`. Languages have up to six plural categories.
- **Keys:** stable semantic keys (`checkout.payButton`), with context comments for translators. No reused strings across different meanings.
- **Formatting:** `Intl.DateTimeFormat`, `NumberFormat` (currency, unit, compact), `RelativeTimeFormat`, `ListFormat`, `Collator` for sorting. Store UTC; format in the user's time zone.
- **RTL:** `dir="rtl"`, CSS logical properties (`margin-inline-start`, `inset-inline`), mirrored directional icons only.
- **Layout:** allow 30–40% text expansion; avoid fixed-width buttons; test with pseudo-localization.
- **Locale negotiation:** user setting > URL > `Accept-Language`; persist choice; provide `hreflang` for public pages.
- **Workflow:** extract keys in CI, fail on missing keys for required locales, translation memory/TMS integration, human review for machine drafts.
