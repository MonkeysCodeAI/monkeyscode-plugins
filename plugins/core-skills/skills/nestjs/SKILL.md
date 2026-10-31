---
id: "builtin:nestjs"
name: "NestJS"
description: "NestJS modules, controllers, providers, guards, and TypeORM patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["nestjs"]},{"type":"file_pattern","patterns":["*.controller.ts","*.service.ts","*.module.ts","*.guard.ts"]}]
examples: ["Create a NestJS CRUD module with TypeORM","Implement a JWT authentication guard","Write a custom exception filter"]
tags: ["typescript","nestjs","typeorm","prisma"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## NestJS Skill
- Use decorators: @Controller, @Injectable, @Module, @Guard
- Use DTOs with class-validator for input validation
- Use TypeORM or Prisma for database access
- Use Pipes for data transformation
- Use Guards for authentication/authorization
- Use Interceptors for response transformation and logging
- Use Exception Filters for error handling
- Use Swagger/OpenAPI decorators for API documentation
- Use ConfigModule with .env for configuration
- Use Bull/BullMQ for background job processing
- Use WebSockets gateway for real-time features
- Follow modular architecture (one feature per module)