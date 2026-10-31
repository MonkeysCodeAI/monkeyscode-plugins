---
id: "builtin:dotnet"
name: "ASP.NET Core"
description: "ASP.NET Core Minimal API, Entity Framework, Blazor, and .NET patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["dotnet","aspnet"]},{"type":"file_pattern","patterns":["*.csproj","Program.cs","*Controller.cs"]}]
examples: ["Create a minimal API with typed results","Implement EF Core with repository pattern","Build a Blazor component with interactive rendering"]
tags: ["csharp","dotnet","aspnet","efcore","blazor"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## ASP.NET Core Skill
- Use Minimal APIs for simple endpoints, Controllers for complex ones
- Use Entity Framework Core with code-first migrations
- Use IOptions<T> pattern for configuration
- Use dependency injection via builder.Services
- Use middleware pipeline for cross-cutting concerns
- Use FluentValidation for input validation
- Use MediatR for CQRS pattern
- Use AutoMapper or Mapster for object mapping
- Use Serilog for structured logging
- Use HealthChecks for service monitoring
- Use Response caching and output caching
- Use Blazor for interactive web UIs