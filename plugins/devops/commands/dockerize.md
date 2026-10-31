---
description: Propose a Dockerfile and ignore rules for the current application
argument-hint: "[application path]"
allowed-tools: read_file, grep_search, search_files
---
Inspect $ARGUMENTS and the project's runtime and lockfiles. Produce proposed Dockerfile and .dockerignore text, without editing files or running a build. Use multi-stage construction when useful, reproducible installation, non-root execution and a minimal context. Exclude secrets and explain required runtime configuration without printing secret values.

Describe ports, startup, health checking, graceful shutdown and writable storage. List build and local smoke-test steps as proposals; do not fetch images, push registries or deploy. Call out uncertain base-image compatibility and any native dependencies. Implementation and networked checks need a separate approved task.
