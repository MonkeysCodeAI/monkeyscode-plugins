---
id: "builtin:javascript"
name: "JavaScript"
description: "Modern JavaScript (ES2024+), async patterns, and module best practices"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["javascript","javascriptreact"]}]
examples: ["Create an async data pipeline with generators","Build a debounced event handler with AbortController","Implement a publish/subscribe pattern"]
tags: ["javascript","es2024","async","modules"]
builtin: true
enabled: true
icon: "symbol-variable"
priority: 70
---
## JavaScript Skill
- Use ES modules (import/export) over CommonJS (require)
- Use const by default, let only when reassignment needed, never var
- Use async/await over .then() chains
- Use optional chaining (?.) and nullish coalescing (??)
- Use destructuring for objects and arrays
- Use template literals for string interpolation
- Use Array methods: map, filter, reduce, find, some, every
- Use structuredClone() for deep copies
- Use AbortController for cancellable operations
- Use WeakMap/WeakSet for memory-efficient caches
- Use Intl API for localization
- Use proper error handling with custom Error classes