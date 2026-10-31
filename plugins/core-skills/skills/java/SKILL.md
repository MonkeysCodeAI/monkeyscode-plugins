---
id: "builtin:java"
name: "Java"
description: "Modern Java (17+), records, sealed classes, streams, and project patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["java"]}]
examples: ["Create a REST endpoint with Spring Boot","Implement a repository pattern with JPA","Write a stream pipeline with collectors"]
tags: ["java","spring","jpa","maven","gradle"]
builtin: true
enabled: true
icon: "symbol-class"
priority: 70
---
## Java Skill
- Use Java 17+ features: records, sealed classes, pattern matching
- Use Optional<T> instead of null checks
- Use streams for collection processing
- Use var for local variables with clear types
- Use try-with-resources for AutoCloseable
- Follow Maven/Gradle standard project layout (src/main/java, src/test/java)
- Use JUnit 5 + Mockito for testing
- Use Lombok sparingly (prefer records)
- Use dependency injection (Spring or manual)
- Use SLF4J + Logback for logging
- Follow naming: PascalCase classes, camelCase methods, UPPER_SNAKE constants
- Use enum for finite state sets