---
description: Draft schema.org JSON-LD for a page template from its real data
argument-hint: "<page or template path> [schema type]"
allowed-tools: [read_file, grep_search, glob_files]
---
For $ARGUMENTS, read the template and the data it renders, then determine which schema.org types honestly describe the page. If the type is ambiguous, list the candidates and ask. Inspect existing structured data in the codebase to reuse `@id` values, Organization and WebSite entities.

Return: the recommended types and why; a JSON-LD draft whose every property maps to a named field from the page's data (show the mapping), with absolute URLs and ISO 8601 dates; where and how to emit it server-side in this framework, with safe serialization that escapes `<`; properties omitted because the data is not visible on the page; and validation steps (Schema.org validator, Rich Results Test). Never invent reviews, ratings, prices, authors or FAQs, and do not promise rich result display. This command is read-only and does not edit files or access the network.
