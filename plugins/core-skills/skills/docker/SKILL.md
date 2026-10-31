---
id: "builtin:docker"
name: "Docker & Kubernetes"
description: "Containerization, orchestration, and cloud-native deployment"
version: "1.0.0"
author: "MonkeysCode"
category: "devops"
triggers: [{"type":"file_pattern","patterns":["Dockerfile*","docker-compose*.yml","*.yaml"]},{"type":"framework","frameworks":["docker","kubernetes"]}]
examples: ["Create a multi-stage Dockerfile for a Node.js app","Write a docker-compose.yml with database, Redis, and app","Generate Kubernetes manifests for a microservice"]
tags: ["docker","kubernetes","k8s","devops","containers"]
builtin: true
enabled: true
icon: "server"
priority: 70
---
## Docker & Kubernetes Skill
- Use multi-stage Docker builds for smaller images
- Use .dockerignore to exclude unnecessary files
- Use non-root users in containers
- Pin specific image versions (no :latest in production)
- Use docker-compose for local development
- Use health checks in Dockerfiles
- For Kubernetes: use Deployments, not bare Pods
- Use ConfigMaps and Secrets for configuration
- Set resource requests and limits
- Use Horizontal Pod Autoscaler for scaling
- Use Ingress for HTTP routing
- Use namespaces for environment isolation