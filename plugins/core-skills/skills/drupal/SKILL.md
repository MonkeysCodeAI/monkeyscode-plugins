---
id: "builtin:drupal"
name: "Drupal"
description: "Drupal CMS development with hooks, plugins, entities, and Twig templates"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["drupal"]},{"type":"file_pattern","patterns":["*.module","*.install","*.theme","*.routing.yml"]}]
examples: ["Create a custom Drupal block plugin","Write a custom entity with fields","Implement a hook_form_alter"]
tags: ["php","drupal","cms","twig"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## Drupal Skill
- Follow Drupal coding standards (https://www.drupal.org/docs/develop/standards)
- Use dependency injection via services.yml
- Use Entity API for content modeling
- Use Plugin API for extensible components (Blocks, Fields, etc.)
- Use Form API for form building
- Use Twig for templates (never PHP in templates)
- Follow hook naming: hook_HOOK_NAME() in .module files
- Use configuration management (config/install, config/optional)
- Use Batch API for large operations
- Queue API for background processing
- Respect entity access checks