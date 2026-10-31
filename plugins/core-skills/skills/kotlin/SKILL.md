---
id: "builtin:kotlin"
name: "Kotlin"
description: "Kotlin conventions, coroutines, and Android/JVM patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["kotlin"]}]
examples: ["Create a Kotlin coroutine with structured concurrency","Build an Android ViewModel with StateFlow","Implement a Ktor HTTP endpoint"]
tags: ["kotlin","android","coroutines","ktor"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## Kotlin Skill
- Use data classes for DTOs and value objects
- Use sealed classes/interfaces for exhaustive hierarchies
- Use coroutines and Flow for async operations
- Use extension functions for readable APIs
- Use scope functions: let, run, with, apply, also
- Use val (immutable) over var (mutable) by default
- Use null safety: ?., ?: elvis, !! only when truly safe
- Use when expressions (exhaustive matching)
- Use Kotlin DSL for Gradle build scripts
- Use Koin or Hilt for dependency injection
- Use JUnit 5 + MockK for testing
- Follow Kotlin coding conventions (official style guide)