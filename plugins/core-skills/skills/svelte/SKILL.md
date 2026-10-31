---
id: "builtin:svelte"
name: "Svelte/SvelteKit"
description: "Svelte 5 runes, SvelteKit routing, and reactive patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["svelte","sveltekit"]},{"type":"file_pattern","patterns":["*.svelte","+page.svelte","+layout.svelte"]}]
examples: ["Create a SvelteKit page with server-side loading","Build a reactive component with $state runes","Implement a form action with validation"]
tags: ["svelte","sveltekit","runes","typescript"]
builtin: true
enabled: true
icon: "symbol-event"
priority: 80
---
## Svelte/SvelteKit Skill
- Use Svelte 5 runes: $state, $derived, $effect, $props
- Use SvelteKit for full-stack apps (file-based routing)
- Use +page.svelte for pages, +layout.svelte for layouts
- Use +page.server.ts for server-side load functions
- Use form actions for progressive enhancement
- Use $lib for shared utilities and components
- Use stores for global state
- Use transitions and animations for UI polish
- Use <svelte:component> for dynamic components
- Use CSS scoping (styles are scoped by default)
- Use TypeScript with lang="ts" in script tags
- Use adapter-auto for flexible deployment