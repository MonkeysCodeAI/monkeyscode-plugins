---
id: "builtin:react"
name: "React"
description: "React with hooks, functional components, and modern patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["react","nextjs"]},{"type":"file_pattern","patterns":["*.jsx","*.tsx"]}]
examples: ["Create a reusable data table component with sorting","Build a custom hook for API data fetching","Implement a form with validation using React Hook Form"]
tags: ["javascript","typescript","react","nextjs","hooks"]
builtin: true
enabled: true
icon: "symbol-event"
priority: 80
---
## React Skill
- Use functional components with hooks (no class components)
- Use TypeScript for all new components
- Follow component composition over prop drilling
- Use React.memo() for expensive components
- Use useMemo/useCallback for expensive computations
- Use custom hooks to extract reusable logic
- Use React Context for global state (or Zustand/Jotai for complex state)
- Use React.Suspense + lazy() for code splitting
- Follow naming: PascalCase for components, camelCase for hooks (useXxx)
- Use CSS Modules or styled-components (not inline styles)
- Use React Server Components when using Next.js App Router