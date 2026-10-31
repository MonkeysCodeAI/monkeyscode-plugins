---
id: "builtin:go"
name: "Go"
description: "Go conventions, error handling, concurrency, and project structure"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["go"]}]
examples: ["Create an HTTP handler with middleware","Implement a worker pool with goroutines","Write table-driven tests for a service"]
tags: ["go","golang","goroutines"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## Go Skill
- Follow standard Go project layout (cmd/, internal/, pkg/)
- Use error wrapping with fmt.Errorf("%w", err)
- Handle errors explicitly (no panic except for truly unrecoverable)
- Use interfaces for abstraction (accept interfaces, return structs)
- Use goroutines + channels for concurrency
- Use context.Context for cancellation and deadlines
- Use table-driven tests
- Use go:embed for static assets
- Follow effective Go naming: short, descriptive, unexported by default
- Use golangci-lint for linting
- Use go modules for dependency management