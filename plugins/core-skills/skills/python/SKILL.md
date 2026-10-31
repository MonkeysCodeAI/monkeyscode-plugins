---
id: "builtin:python"
name: "Python"
description: "Python best practices, type hints, and modern patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "language"
triggers: [{"type":"language","languages":["python"]}]
examples: ["Create a FastAPI endpoint with Pydantic models","Write a Python CLI tool with Click","Implement a data pipeline with generators"]
tags: ["python","fastapi","django","flask"]
builtin: true
enabled: true
icon: "symbol-method"
priority: 70
---
## Python Skill
- Use type hints for all function signatures
- Follow PEP 8 style guide
- Use dataclasses or Pydantic for data structures
- Use pathlib instead of os.path
- Use f-strings for string formatting
- Use context managers (with) for resources
- Use list comprehensions when readable
- Use virtual environments (venv or poetry)
- Use pytest for testing
- Use async/await for I/O-bound operations
- Use logging module instead of print()
- Use __all__ for public API exports