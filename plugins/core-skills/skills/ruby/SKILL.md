---
id: "builtin:ruby"
name: "Ruby"
description: "Ruby conventions, Rails patterns, and idiomatic best practices"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["ruby"]}]
examples: ["Create a Rails controller with strong parameters","Implement a service object pattern","Write a custom Active Record scope"]
tags: ["ruby","rails","rspec","bundler"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## Ruby Skill
- Follow Ruby style guide (community conventions)
- Use snake_case for methods/variables, PascalCase for classes/modules
- Use blocks, procs, and lambdas idiomatically
- Use Enumerable methods: map, select, reject, reduce, each_with_object
- Use symbols for hash keys
- Use string interpolation over concatenation
- Use frozen_string_literal: true comment
- Use keyword arguments for methods with many parameters
- Use Struct or Data for simple value objects
- Use RSpec for testing with FactoryBot
- Use Bundler for dependency management
- Use Sorbet or RBS for type annotations when available