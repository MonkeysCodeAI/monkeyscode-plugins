---
id: "builtin:vue"
name: "Vue.js"
description: "Vue 3 Composition API, script setup, Pinia, and Nuxt patterns"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["vue","nuxt"]},{"type":"file_pattern","patterns":["*.vue"]}]
examples: ["Create a composable for API data fetching","Build a Pinia store with actions and getters","Implement a Vue component with slots and emits"]
tags: ["vue","vue3","nuxt","pinia","composition-api"]
builtin: true
enabled: true
icon: "symbol-event"
priority: 80
---
## Vue.js Skill
- Use Vue 3 Composition API with <script setup>
- Use defineProps, defineEmits, defineExpose
- Use ref() for primitives, reactive() for objects
- Use computed() for derived state
- Use watch/watchEffect for side effects
- Use Pinia for state management (not Vuex)
- Use composables (useXxx) for reusable logic
- Use defineAsyncComponent for lazy loading
- Use Teleport for modals and overlays
- Follow component naming: PascalCase for SFCs
- Use TypeScript with defineComponent for type safety
- Use Nuxt 3 for SSR/SSG applications