---
name: WordPress Development
description: WordPress plugins, blocks, block themes, REST and security. Use when editing a WordPress plugin or theme, block.json, theme.json or wp-* PHP code.
trigger: manual
---
# WordPress development

- **Architecture:** plugins for functionality, themes for presentation. Use hooks (`add_action`, `add_filter`) with explicit priorities; never edit core.
- **Blocks:** register with `block.json` (`apiVersion: 3`), `@wordpress/scripts` for builds, dynamic blocks via `render` PHP file, `useBlockProps`. Prefer the Interactivity API for front-end interactivity over ad-hoc scripts.
- **Block themes:** `theme.json` (version 3) for settings and styles, templates and parts in HTML, patterns in `/patterns`. Use presets instead of hard-coded values.
- **Data:** custom post types and taxonomies with `show_in_rest`; post meta registered with schema; custom tables only when justified, created with `dbDelta`.
- **REST:** `register_rest_route` with `permission_callback`, `args` validation and sanitization.
- **Security:** nonces + capabilities for intent and authority; sanitize on input, escape on output; `$wpdb->prepare`; never trust `$_SERVER` headers.
- **Performance:** avoid queries in loops, use `WP_Query` args like `no_found_rows`, cache with transients/object cache, keep autoloaded options small.
- **Quality:** PHPCS with WordPress standards, PHPStan with WordPress stubs, PHPUnit via `wp-env`, Playwright for E2E.
