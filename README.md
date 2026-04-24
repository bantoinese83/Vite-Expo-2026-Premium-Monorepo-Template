# 🚀 Vite + Expo 2026 Premium Monorepo Template

A cutting-edge, high-performance monorepo architecture designed for the 2026 development landscape. Built with **Bun**, **Turborepo**, **Vite**, and **Expo SDK 55**.

## 🌟 Key Features

- **Monorepo Orchestration**: Managed by [Turborepo](https://turbo.build/) for ultra-fast, cached task execution.
- **AI-First Infrastructure**: 
  - `@repo/ai`: Unified AI SDK abstraction (Gemini, OpenAI) with streaming support.
- **Shared Data Layer**:
  - `@repo/db`: Shared Drizzle ORM schema for Web & Edge.
- **Universal Styling**: 
  - **Web**: Tailwind CSS v4 with zero-config Vite plugin.
  - **Mobile**: NativeWind v4 with **Moti** for universal animations.
- **Elite Developer Experience**:
  - **Turbo Generators**: Scaffold components and packages instantly.
  - **Oxlint**: Near-instant linting (<20ms).
  - **Bun**: High-performance runtime and package manager.

## 📂 Project Structure

```text
├── apps
│   ├── web          # Vite + React (Tailwind v4)
│   └── mobile       # Expo Router (NativeWind v4 + Moti)
├── packages
│   ├── ui           # Shared Atomic UI (with Liquid Metal components)
│   ├── ai           # Unified AI SDK abstraction
│   ├── db           # Shared Drizzle ORM schemas
│   ├── api          # Shared business logic & hooks
│   ├── tsconfig     # Shared TypeScript configurations
│   └── tailwind-config # Centralized HSL tokens & theme definitions
└── turbo            # Custom DX generators
```

## 🛠️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (Required)

### Installation
```bash
bun install
```

### Development
Start the entire stack (Web, Mobile, and Package watchers):
```bash
bun dev
```

### Quality Assurance
Ensure 100/100 quality with a single command:
```bash
bun type-check    # Strict TypeScript validation
bun lint:ox       # Ultra-fast linting
bun test          # Run Vitest suite
```

## 🎨 Design System

The template features a **Premium "Liquid Metal" Dark Mode** system:
- **HSL Tokens**: Easily customize your brand by updating `packages/tailwind-config/theme.css`.
- **Glassmorphism**: Built-in support for translucent, blurred surfaces.
- **Type-Safe Classes**: Full IntelliSense support for Tailwind classes even in shared components.

## 📜 License
MIT
