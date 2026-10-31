---
id: "builtin:nextjs"
name: "Next.js"
description: "Next.js App Router, Server Components, Server Actions, and deployment"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["nextjs"]},{"type":"file_pattern","patterns":["app/**/page.tsx","app/**/layout.tsx","app/**/route.ts"]}]
examples: ["Create a Server Component with data fetching","Implement a Server Action for form submission","Build a dynamic route with generateStaticParams"]
tags: ["nextjs","react","typescript","vercel","ssr"]
builtin: true
enabled: true
icon: "symbol-event"
priority: 80
---
## Next.js Skill
- Use App Router (app/ directory) for new projects
- Use Server Components by default (add 'use client' only when needed)
- Use Server Actions for form handling and mutations
- Use generateStaticParams for static generation
- Use loading.tsx, error.tsx, not-found.tsx for UI states
- Use middleware.ts for request-level logic
- Use next/image for optimized images
- Use next/font for optimized fonts
- Use Route Handlers (app/api/) for API endpoints
- Use React Server Components for data fetching
- Use Suspense boundaries for streaming
- Use Parallel Routes and Intercepting Routes for complex layouts