---
description: Produce a design brief, token plan and ASCII wireframes before building UI
argument-hint: "<what to build> [audience] [brand constraints]"
allowed-tools: [read_file, grep_search, glob_files]
---
Plan the interface described in $ARGUMENTS before any code is written. First inspect the repository for existing tokens, theme configuration, component libraries and brand assets, and list what must be reused. If the subject, audience or primary job is unclear, propose one and ask for confirmation.

Return:
1. **Brief:** subject, audience, the screen's single job, tone in three adjectives, and constraints found in the repository.
2. **Tokens:** 4–6 named colors with roles (and computed contrast ratios for text pairs), type families and scale, spacing and radius scales, motion durations/easing. Mark which are existing tokens and which are new.
3. **Layout:** a one-sentence concept and ASCII wireframes for mobile and desktop, with alignment and content priority.
4. **Signature moment:** the one memorable element, and what is deliberately kept quiet.
5. **Self-check:** name any part of the plan that looks like a generic default for this kind of page and the revision you made.
6. **Build outline:** files and components to create or modify, states to implement (loading, empty, error, focus), and verification steps.

This command is read-only: it does not create files, run commands or access the network. Implementation happens in a separate step with normal approval.
