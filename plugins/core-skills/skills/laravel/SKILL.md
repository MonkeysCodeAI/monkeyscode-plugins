---
id: "builtin:laravel"
name: "Laravel"
description: "Laravel PHP framework conventions, Eloquent, Blade, Artisan, and best practices"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["laravel"]},{"type":"file_pattern","patterns":["*.blade.php","routes/*.php","app/Http/**"]}]
examples: ["Create a new Laravel resource controller for Products","Write an Eloquent query with eager loading","Generate a form request with validation rules"]
tags: ["php","laravel","eloquent","blade"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## Laravel Skill
- Follow PSR-12 coding standards
- Use Eloquent ORM for database queries (no raw SQL unless performance-critical)
- Use Form Requests for validation
- Use Resource Controllers for RESTful routes
- Use Blade components over @include
- Follow Laravel naming conventions: singular models, plural tables, camelCase methods
- Use Laravel's built-in helpers: Str::, Arr::, collect()
- Use Policies for authorization
- Use Events + Listeners for decoupled logic
- Use Queued Jobs for heavy processing
- Database migrations should always have down() methods