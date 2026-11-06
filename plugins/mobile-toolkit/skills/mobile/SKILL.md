---
name: Mobile Development
description: React Native/Expo and Flutter practices. Use when building or reviewing mobile screens, lists, navigation, native modules or app performance.
trigger: manual
---
# Mobile development

## React Native
- Prefer Expo with development builds and config plugins; EAS for builds and updates.
- Lists: `FlatList`/`FlashList` with stable keys and `getItemLayout` where possible.
- Navigation: Expo Router or React Navigation with typed routes; handle deep links and back behavior.
- Animations: Reanimated on the UI thread; Gesture Handler for gestures.
- Native code: Expo Modules or Turbo Modules on the New Architecture.
- Storage: `expo-secure-store` for secrets; MMKV or SQLite for data.

## Flutter
- State: Riverpod or Bloc consistently; immutable models; `const` widgets.
- Lists: `ListView.builder`/slivers; avoid rebuilding large subtrees; `RepaintBoundary` where profiling shows benefit.
- Platform: `MethodChannel`/Pigeon for native APIs; adaptive widgets per platform.
- Profile in profile mode with DevTools; never judge performance in debug.

## Both
Design for offline first, slow networks and interrupted sessions. Ask permissions at the moment of need. Support dynamic type, screen readers and dark mode. Keep secrets out of bundles. Test on low-end Android devices. Track crash-free sessions and startup time.
