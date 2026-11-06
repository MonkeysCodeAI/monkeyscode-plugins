---
id: "builtin:typescript"
name: "TypeScript"
description: "TypeScript strict typing, generics, narrowing and modules. Use when writing or reviewing .ts/.tsx code, type definitions or tsconfig.json."
version: "1.0.1"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["typescript","typescriptreact"]}]
examples: ["Create a type-safe event emitter with generics","Build a discriminated union for API responses","Write a branded type for validated email addresses"]
tags: ["typescript","types","generics","strict"]
builtin: true
enabled: true
icon: "symbol-type-parameter"
priority: 75
---
## TypeScript Skill
- Enable strict mode in tsconfig.json
- Use explicit return types for public functions
- Use interfaces for object shapes, types for unions/intersections
- Use generics for reusable typed utilities
- Use discriminated unions for state machines
- Use const assertions for literal types
- Use satisfies operator for type-safe validation
- Use branded types for domain primitives (e.g., UserId, Email)
- Use Record<K,V> and Map<K,V> appropriately
- Avoid any — use unknown for truly unknown types
- Use declaration merging and module augmentation when extending libs
- Use utility types: Partial, Required, Pick, Omit, ReturnType