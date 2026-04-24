# 🚀 Vite + Expo 2026 Premium Monorepo Template

A cutting-edge, high-performance monorepo architecture designed for the 2026 development landscape. Built with **Bun**, **Turborepo**, **Vite**, and **Expo SDK 55**.

## 🌟 Key Features

- **Monorepo Orchestration**: Managed by [Turborepo](https://turbo.build/) for ultra-fast, cached task execution.
- **Universal Styling**: 
  - **Web**: Powered by **Tailwind CSS v4** with the new zero-config Vite plugin.
  - **Mobile**: Powered by **NativeWind v4** (Tailwind for React Native).
  - **Shared Design Tokens**: Unified HSL-based design system across all platforms.
- **Shared Architecture**:
  - `@repo/ui`: Atomic design system with universal components.
  - `@repo/api`: Shared business logic, schemas (Zod), and data hooks.
  - `@repo/tsconfig`: Centralized, inherited TypeScript configurations for 100/100 quality.
- **Performance First**:
  - **Oxlint**: Near-instant linting (<20ms).
  - **Vitest**: Lightning-fast unit testing.
  - **Bun**: High-performance runtime and package manager.

## 📂 Project Structure

```text
├── apps
│   ├── web          # Vite + React (Tailwind v4)
│   └── mobile       # Expo Router (NativeWind v4)
├── packages
│   ├── ui           # Shared Atomic UI components
│   ├── api          # Shared Zod schemas & API logic
│   ├── tsconfig     # Shared TypeScript configurations
│   └── tailwind-config # Centralized HSL tokens & theme definitions
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
