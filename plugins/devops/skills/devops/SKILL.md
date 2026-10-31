---
name: DevOps Design
description: Docker, Kubernetes and Terraform risk review
trigger: manual
---
# Infrastructure changes
Inspect the existing runtime, lockfiles and deployment configuration before suggesting infrastructure.

Docker: use a small trusted base matched to runtime requirements, reproducible dependency installs, multi-stage builds, a non-root runtime user and a minimal build context. Never copy .env, credentials or local dependency trees into images. Explain health checks, graceful shutdown and writable paths.

Kubernetes: distinguish requests from limits, configure readiness separately from liveness, review service accounts and namespace scope, and keep secrets out of manifests. Plan rollout, disruption and rollback; validate manifests locally before discussing a deployment.

Terraform: inspect providers and lockfiles; review resource replacement, sensitive state, drift and remote backend locking. A plan may refresh remote APIs and disclose data; even planning requires normal approval. Never auto-apply or use approval-bypass flags.

Return a minimal diff proposal, blast radius, verification and rollback strategy. Builds, pushes, cluster access, applies and destroys require explicit environment confirmation and applicable tool approval. Do not claim these prompts enforce IAM or runtime security.
