---
id: "builtin:php"
name: "PHP"
description: "Modern PHP (8.3+), strict typing, enums, fibers, and best practices"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["php"]}]
examples: ["Create a PHP enum with backed values","Implement an interface with union types","Write a Fiber-based async task runner"]
tags: ["php","composer","phpunit","phpstan"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## PHP Skill
- Use PHP 8.3+ features: typed properties, enums, fibers, readonly classes
- Use declare(strict_types=1) in every file
- Use type hints for all parameters, returns, and properties
- Follow PSR-12 coding standards
- Use PSR-4 autoloading via Composer
- Use named arguments for clarity
- Use match expressions over switch
- Use enums (backed enums) for finite value sets
- Use readonly properties and classes for immutability
- Use Attributes for metadata (over docblock annotations)
- Use PHPUnit for testing
- Use PHPStan/Psalm at max level for static analysis