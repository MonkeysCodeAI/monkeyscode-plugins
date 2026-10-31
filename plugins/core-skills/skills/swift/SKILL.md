---
id: "builtin:swift"
name: "Swift"
description: "Swift conventions, SwiftUI, Combine, and Apple platform patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["swift"]}]
examples: ["Create a SwiftUI view with MVVM","Implement a network layer with async/await","Build a Combine pipeline for reactive data"]
tags: ["swift","swiftui","ios","macos","combine"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## Swift Skill
- Use struct over class for value types (prefer value semantics)
- Use protocols for abstraction and composition
- Use enums with associated values for state modeling
- Use async/await and structured concurrency (TaskGroup)
- Use Result<Success, Failure> for error handling
- Use Codable for serialization
- Use @Observable / @State / @Binding for SwiftUI state
- Use property wrappers for cross-cutting concerns
- Follow Swift API design guidelines (clarity, no ambiguity)
- Use guard for early returns
- Use access control: private, fileprivate, internal, public
- Use Swift Package Manager for dependencies