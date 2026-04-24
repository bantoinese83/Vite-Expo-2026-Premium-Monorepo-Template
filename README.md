# 🚀 Vite + Expo 2026: Premium Monorepo Template

<div align="center">
  <p align="center">
    <img src="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/rocket.svg" width="100" height="100" alt="Logo" />
  </p>
  <p><strong>The ultimate high-performance, AI-native, cross-platform engine for 2026.</strong></p>

  [![Bun](https://img.shields.io/badge/Runtime-Bun-black?style=for-the-badge&logo=bun)](https://bun.sh)
  [![Turborepo](https://img.shields.io/badge/Orchestration-Turbo-EF4444?style=for-the-badge&logo=turborepo)](https://turbo.build)
  [![Expo](https://img.shields.io/badge/Mobile-Expo_SDK_55-000020?style=for-the-badge&logo=expo)](https://expo.dev)
  [![Vite](https://img.shields.io/badge/Web-Vite_6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  [![CI](https://github.com/bantoinese83/Vite-Expo-2026-Premium-Monorepo-Template/actions/workflows/ci.yml/badge.svg?style=for-the-badge)](https://github.com/bantoinese83/Vite-Expo-2026-Premium-Monorepo-Template/actions)
</div>

---

## 📖 Table of Contents
- [💎 The "Liquid Metal" Vibe](#-the-liquid-metal-vibe)
- [🧠 AI-Native Architecture](#-ai-native-architecture-repoai)
- [🏗️ Elite Infrastructure](#️-elite-infrastructure)
- [⚡ Quick Start](#-quick-start)
- [🎯 Commercial UX Features](#-commercial-ux-features)
- [🛠️ Turbo Generators](#️-turbo-generators)
- [🗺️ Roadmap](#️-roadmap)
- [🙋 FAQ & Troubleshooting](#-faq--troubleshooting)
- [🤝 Contributing](#-contributing)

---

## ✨ Why this project exists?
Building a high-quality cross-platform app in 2026 requires more than just sharing components. It requires **unified logic**, **AI integration**, and **monetization foundations** from day one. This template eliminates weeks of boilerplate by providing an elite, pre-configured stack that actually works at scale.

---

## 💎 The "Liquid Metal" Vibe
Experience a design system built for the future. Translucent glassmorphism, 60fps physics-based animations, and HSL-first tokens.

| Platform | Rendering Engine | Animation Engine |
| :--- | :--- | :--- |
| **Web** 🌐 | Vite + Tailwind v4 | Moti (physics) |
| **Mobile** 📱 | Expo + NativeWind v4 | Reanimated 3 |
| **Shared** 🔗 | `@repo/ui` | Unified Atoms |

> [!TIP]
> Check out the live demo at [demo.monorepo-2026.app](https://example.com) (coming soon).

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
- **Database**: Drizzle ORM + Neon HTTP (Optimized for Edge).
- **Auth**: Better Auth (Pre-configured for Web + Mobile deep linking).
- **Monetization**: RevenueCat (Mobile) + Stripe (Web) with shared `useAppSubscription` logic.
- **DX Engine**: Biome (10x faster) + Turbo Generators.

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

### 3. Quality Gate
```bash
bun type-check    # Strict TypeScript validation
bun lint          # Instant Biome checks
bun test          # Vitest suite
```

---

## 🗺️ Roadmap
- [x] **Phase 1**: Core AI & DB Architecture.
- [x] **Phase 2**: Liquid Metal Design System.
- [x] **Phase 3**: Biome Migration & DX Hardening.
- [ ] **Phase 4**: Native Push Notification Service (via Expo).
- [ ] **Phase 5**: Shared Video Primitive (via expo-video).
- [ ] **Phase 6**: Advanced AI Streaming Components.

---

## 🙋 FAQ & Troubleshooting

**Q: Why Biome instead of Prettier/ESLint?**
A: Performance. Biome is significantly faster and provides a single, unified configuration for both linting and formatting.

**Q: How do I add my AI keys?**
A: Run `bun run setup` and update the generated `.env` with your `GOOGLE_GENERATIVE_AI_API_KEY`.

**Q: Mobile deep-linking isn't working.**
A: Ensure you've configured your scheme in `app.json` and matched it in your Better Auth configuration.

---

## 🤝 Contributing
Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) (coming soon) before submitting PRs.

---

## 📬 Contact & Support
- **Author**: Bryan ([@mlabs](https://mlabs.ai))
- **Support**: Open a [GitHub Issue](https://github.com/bantoinese83/Vite-Expo-2026-Premium-Monorepo-Template/issues)
- **Twitter**: [@monarchlabs](https://twitter.com/example)

---

## 📊 Repository Stats
![Language Breakdown](https://img.shields.io/github/languages/top/bantoinese83/Vite-Expo-2026-Premium-Monorepo-Template?style=for-the-badge)
![GitHub Stars](https://img.shields.io/github/stars/bantoinese83/Vite-Expo-2026-Premium-Monorepo-Template?style=for-the-badge)

Built with ❤️ by elite developers for developers. **MIT Licensed.**
