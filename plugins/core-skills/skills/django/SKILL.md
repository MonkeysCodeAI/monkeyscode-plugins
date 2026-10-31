---
id: "builtin:django"
name: "Django"
description: "Django models, views, templates, DRF, and admin customization"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["django"]},{"type":"file_pattern","patterns":["*/views.py","*/models.py","*/urls.py","*/admin.py"]}]
examples: ["Create a DRF ViewSet with filters and pagination","Write a custom model manager with chainable methods","Implement a Django middleware for request logging"]
tags: ["python","django","drf","orm"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## Django Skill
- Follow Django's "batteries included" philosophy
- Use class-based views (CBV) for standard CRUD, function views for custom logic
- Use Django ORM: QuerySets, F expressions, Q objects, annotations
- Use Django REST Framework for API development
- Use serializers for data validation and transformation
- Use permissions and authentication classes
- Use Django signals sparingly (prefer explicit calls)
- Use management commands for CLI tasks
- Use Django migrations for schema changes
- Use template tags and filters for presentation logic
- Use Django admin for back-office interfaces
- Use celery for background tasks