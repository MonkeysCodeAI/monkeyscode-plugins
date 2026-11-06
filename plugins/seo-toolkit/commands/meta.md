---
description: Rewrite titles, descriptions and headings for a page from its actual content
argument-hint: "<page path> [target query or audience]"
allowed-tools: [read_file, grep_search, glob_files]
---
Read the page at $ARGUMENTS and the content it renders. Identify the page's primary intent and, if the user supplied one, the target query; do not invent search volumes or keyword difficulty. Propose up to three title options and two meta descriptions that accurately describe the visible content, a corrected heading outline (one h1, logical h2/h3), improved link text and image alt where weak, and one answer-first summary paragraph suitable for search snippets and AI answers. Note duplicate or templated metadata across similar pages. Show where each change belongs in the codebase using the framework's metadata API. Keep wording in the site's existing voice; avoid keyword stuffing and clickbait. Read-only: no edits, commands or network access, and no ranking promises.
