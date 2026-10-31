---
id: "builtin:angular"
name: "Angular"
description: "Angular 17+, signals, standalone components, and RxJS patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["angular"]},{"type":"file_pattern","patterns":["*.component.ts","*.module.ts","*.service.ts"]}]
examples: ["Create a standalone component with signals","Build an HTTP interceptor for auth tokens","Implement a reactive form with validation"]
tags: ["angular","rxjs","signals","typescript"]
builtin: true
enabled: true
icon: "symbol-event"
priority: 80
---
## Angular Skill
- Use Angular 17+ features: signals, control flow (@if, @for, @switch)
- Use standalone components (no NgModules for new code)
- Use inject() function over constructor injection
- Use Angular signals for reactive state
- Use RxJS operators: switchMap, mergeMap, combineLatest, debounceTime
- Use typed reactive forms (FormControl<T>)
- Use OnPush change detection strategy
- Use Angular Router with lazy loading
- Use interceptors for HTTP cross-cutting concerns
- Use Angular Material or CDK for UI components
- Follow Angular style guide (feature-based folder structure)
- Use ng generate for scaffolding