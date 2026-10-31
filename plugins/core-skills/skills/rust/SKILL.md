---
id: "builtin:rust"
name: "Rust"
description: "Rust ownership, error handling, and idiomatic patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["rust"]}]
examples: ["Create a CLI tool with clap","Implement a REST API with Actix-web","Write async file processing with tokio"]
tags: ["rust","cargo","tokio"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## Rust Skill
- Use Result<T, E> for error handling (no unwrap() in production)
- Use the ? operator for error propagation
- Use thiserror for custom error types
- Use anyhow for application-level errors
- Prefer &str over String for function parameters
- Use iterators over for loops when possible
- Use derive macros (Debug, Clone, PartialEq, Serialize, Deserialize)
- Use cargo clippy for linting
- Use modules for code organization
- Minimize use of unsafe
- Use Arc<Mutex<T>> for shared mutable state across threads
- Use tokio for async runtime