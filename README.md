# 🚀 Vite + Expo 2026: Premium Monorepo Template

[![Bun](https://img.shields.io/badge/Runtime-Bun-black?style=for-the-badge&logo=bun)](https://bun.sh)
[![Turborepo](https://img.shields.io/badge/Orchestration-Turbo-EF4444?style=for-the-badge&logo=turborepo)](https://turbo.build)
[![Expo](https://img.shields.io/badge/Mobile-Expo_SDK_55-000020?style=for-the-badge&logo=expo)](https://expo.dev)
[![Vite](https://img.shields.io/badge/Web-Vite_6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> The ultimate 2026 starting point for building high-performance, AI-native, cross-platform applications. Build once, run everywhere, and monetize from day one.

---

## 💎 The "Liquid Metal" Vibe
Experience a design system built for the future. Translucent glassmorphism, 60fps physics-based animations, and HSL-first tokens.

| Platform | Rendering Engine | Animation Engine |
| :--- | :--- | :--- |
| **Web** 🌐 | Vite + Tailwind v4 | Moti (physics) |
| **Mobile** 📱 | Expo + NativeWind v4 | Reanimated 3 |
| **Shared** 🔗 | `@repo/ui` | Unified Atoms |

---

## 🧠 AI-Native Architecture (`@repo/ai`)
In this template, AI isn't an addon—it's the core engine.

```mermaid
graph TD
    A[Mobile/Web UI] --> B(@repo/api hooks)
    B --> C(@repo/ai package)
    C --> D{Google Gemini 1.5 Pro}
    C --> E{Structured Zod Output}
    D --> F[Active Architect Assistant]
```

- **Unified SDK**: Google Gemini 1.5 Pro + Vercel AI SDK.
- **Type-Safe Prompts**: Centralized prompt registry with Zod validation.
- **Active UI**: Integrated `AIAssistantCard` for real-time architectural insights.

---

## 🏗️ Elite Infrastructure

### 🛡️ Core Stack
- **Database**: Drizzle ORM + Neon HTTP (Optimized for Vercel Edge/Cloudflare Workers).
- **Auth**: Better Auth (Pre-configured for Edge + Mobile deep linking).
- **Monetization**: RevenueCat (Mobile) + Stripe (Web) with shared `useAppSubscription` logic.
- **DX Engine**: Biome (10x faster than ESLint/Prettier) + Turbo Generators.

### 📂 Workspace Map
```text
├── apps
│   ├── web          # Vite + React (Ultra-fast hydration)
│   └── mobile       # Expo Router (Full native speed)
├── packages
│   ├── ui           # Shared "Liquid Metal" Design System
│   ├── ai           # Centralized AI "Brain"
│   ├── db           # Shared Schema & Migrations
│   ├── api          # Business logic, i18n, & Hooks
│   ├── tsconfig     # Strict mode configurations
│   └── config       # Tailwind & Workspace presets
└── scripts          # setup.sh (The "Day 0" magic)
```

---

## ⚡ Quick Start

### 1. The "Day 0" Ignition
Get your entire environment ready in one command:
```bash
bun run setup
```
*This installs deps, creates your `.env`, and generates your DB schema.*

### 2. Enter Flow State
```bash
bun dev
```
*Starts Web, Mobile, and all package watchers simultaneously.*

### 3. Quality Gate
```bash
bun type-check    # Strict TypeScript validation
bun lint          # Instant Biome checks
bun test          # Vitest suite
```

---

## 🎯 Commercial UX Features
- **Tactical Haptics**: Native vibrations for mobile interactions.
- **Premium Skeletons**: Shimmer loaders for zero layout shift.
- **Feature Gates**: Conditional UI components to upsell Pro features.
- **i18n Ready**: Multi-language support out of the box (English/Spanish included).

---

## 🛠️ Turbo Generators
Scaffold atomic components in seconds:
```bash
bun turbo gen ui-component
```
*Scaffolds a new component in `packages/ui` with full animations and exports.*

---

## 📜 License
Built with ❤️ by elite developers for developers. **MIT Licensed.**
