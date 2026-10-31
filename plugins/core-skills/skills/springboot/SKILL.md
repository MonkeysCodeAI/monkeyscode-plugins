---
id: "builtin:springboot"
name: "Spring Boot"
description: "Spring Boot, Spring Data, Spring Security, and microservice patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["spring","springboot"]},{"type":"file_pattern","patterns":["*Controller.java","*Service.java","*Repository.java"]}]
examples: ["Create a REST controller with pagination","Implement Spring Security with JWT","Write a Spring Data JPA specification for dynamic queries"]
tags: ["java","spring","springboot","jpa","microservices"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## Spring Boot Skill
- Use constructor injection (no @Autowired on fields)
- Use Spring Data JPA repositories (extend JpaRepository)
- Use @RestController for REST APIs
- Use @Service for business logic
- Use @Transactional for database transactions
- Use Spring Security with SecurityFilterChain configuration
- Use application.yml over application.properties
- Use Spring Profiles for environment configuration
- Use Spring Actuator for health checks and metrics
- Use MapStruct or manual mapping for DTO conversion
- Use @Valid with Bean Validation for input validation
- Use ResponseEntity for flexible HTTP responses