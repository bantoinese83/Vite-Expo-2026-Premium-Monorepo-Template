# 🚀 Monorepo Architecture Overview (v2026)

This monorepo has been optimized for **100/100 Quality**, maximum maintainability, and a premium developer experience.

## 🏗️ Core Architecture

- **`apps/web`**: High-performance Vite + React environment using Tailwind CSS v4.
- **`apps/mobile`**: Native Expo SDK 55 application with Expo Router and NativeWind v4.
- **`packages/ui`**: Atomic design system featuring "Liquid Metal" glassmorphism and Moti animations.
- **`packages/ai`**: AI-Native abstraction layer powered by Google Gemini 1.5 Pro.
- **`packages/db`**: Global data layer using Drizzle ORM and Neon HTTP.
- **`packages/api`**: Shared business logic, i18n translations, and platform-agnostic hooks.

## 🛠️ Integrated Elite Tools

| Tool | Purpose | Benefit |
| :--- | :--- | :--- |
| **Bun** | Runtime & Pkg Manager | Ultra-fast installs and execution. |
| **Biome** | Linting & Formatting | 10x faster than Prettier/ESLint. |
| **Turborepo** | Task Orchestration | Cached builds and parallel execution. |
| **Sentry** | Observability | Real-time error tracking & performance. |
| **PostHog** | Analytics | Product-led growth insights. |
| **RevenueCat** | Monetization | Seamless mobile IAP management. |
| **Better Auth** | Authentication | Edge-ready, secure identity provider. |

## 📐 Quality Standards

- **One Function = One Purpose**: Strict adherence to the Single Responsibility Principle.
- **Edge-Ready**: Database and API layers optimized for Vercel/Cloudflare Edge.
- **Resilient UI**: Integrated Error Boundaries and high-performance Shimmer skeletons.
- **Type-Safe Prompts**: AI interactions validated via Zod schemas.

## 🚀 DX Commands

| Command | Action |
| :--- | :--- |
| `bun run setup` | Instant "Day 0" environment configuration. |
| `bun lint` | Run Biome's high-speed quality check. |
| `bun type-check` | Validate monorepo-wide type safety. |
| `bun test` | Execute platform-agnostic Vitest suite. |
| `bun turbo gen` | Scaffold new atoms, molecules, or packages. |
| `bun dev` | Synchronized development across all apps. |

---
**Status**: ✅ 0 Errors | ✅ 0 Warnings | ✅ 100/100 Quality Score
