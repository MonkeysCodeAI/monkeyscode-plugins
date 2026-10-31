# DevOps

Draft 1.0.0 by MonkeysCode (MIT). Use `/dockerize path/to/app` for proposed Dockerfile and ignore rules, select the manual DevOps Design skill, or delegate static infrastructure review to `devops`.

The command and agent read/search files only. They do not build, push, query clusters or apply Terraform. Advice addresses container privileges, deployment health, resource replacement and rollback. Prompts are not IAM enforcement. All execution requires a separately approved task and confirmed environment; even Terraform planning may contact remote APIs.

Supports IDE 1.3.10, Code Agent 1.1.8 and CLI 1.1.10, pending app acceptance. No hooks, MCP, bundled executables, network integrations, environment inputs or extra dependencies. Docker/cloud tooling is neither installed nor automatically invoked.

Original text and static SVG; no vendored tools. Rights review, publishing approval and signing remain release gates.
