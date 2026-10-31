---
id: "builtin:csharp"
name: "C#"
description: "Modern C# (12+), LINQ, async patterns, and .NET conventions"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["csharp"]}]
examples: ["Create a minimal API endpoint in ASP.NET Core","Implement CQRS with MediatR","Write an async streaming endpoint with IAsyncEnumerable"]
tags: ["csharp","dotnet","aspnet","linq","entity-framework"]
builtin: true
enabled: true
icon: "symbol-class"
priority: 70
---
## C# Skill
- Use C# 12+ features: primary constructors, collection expressions, raw string literals
- Use record types for immutable data
- Use LINQ for queries (prefer method syntax for complex queries)
- Use async/await with ConfigureAwait(false) in libraries
- Use nullable reference types (enable in .csproj)
- Use pattern matching (switch expressions, is patterns)
- Use dependency injection via Microsoft.Extensions.DependencyInjection
- Follow .NET naming: PascalCase for public, _camelCase for private fields
- Use IAsyncEnumerable<T> for streaming data
- Use Span<T> and Memory<T> for performance-critical paths
- Use xUnit or NUnit for testing with Moq/NSubstitute
- Use ILogger<T> for structured logging