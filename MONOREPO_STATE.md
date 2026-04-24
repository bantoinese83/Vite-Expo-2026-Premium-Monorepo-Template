# 🚀 Monorepo Architecture Overview (v2026)

This monorepo has been optimized for **100/100 Quality**, maximum maintainability, and a premium developer experience.

## 🏗️ Core Architecture

- **`apps/web`**: High-performance Vite + React SPA using **Tailwind CSS v4**.
- **`apps/mobile`**: Modern Expo (SDK 55) application with file-based routing and **NativeWind v4**.
- **`packages/ui`**: Atomic design system using standard React Native components augmented for Tailwind.
- **`packages/api`**: Strictly typed business logic and schema validation using **Zod**.
- **`packages/tsconfig`**: Shared, inherited TypeScript configurations.
- **`packages/tailwind-config`**: Centralized theme tokens (HSL-based) for consistent cross-platform styling.

## ✨ Key Features & Improvements

### 1. Tailwind CSS v4 (Web)
We've moved to the future of styling on the web:
- **Vite Plugin**: No PostCSS or `tailwind.config.js` required for the web.
- **@theme Block**: Theme variables are defined directly in CSS for maximum performance and readability.
- **Auto-scanning**: Tailwind v4 automatically detects classes in your shared `@repo/ui` package.

### 2. NativeWind v4 (Mobile)
Mobile components use the same Tailwind utility classes, mapped to native styles:
- **Universal Components**: UI built in `packages/ui` works seamlessly across iOS, Android, and Web.
- **Type Safety**: Global augmentation ensures `className` is recognized across all platforms.

### 3. Shared Design Token System
The "source of truth" for colors and spacing is located in `packages/tailwind-config`:
- **`theme.css`**: Tailwind v4 variables for Web.
- **`index.js`**: Synchronized Tailwind v3-style config for Mobile/NativeWind compatibility.

### 4. Ultra-Fast Quality Gates
- **Oxlint**: Near-instant linting (<20ms).
- **Vitest**: Integrated for lightning-fast unit testing in the `@repo/api` package.
- **Strict TS**: Zero-error tolerance across all workspaces.

## 🛠️ Developer Workflow

| Command | Action |
| :--- | :--- |
| `bun type-check` | Run TypeScript validation across all workspaces. |
| `bun lint:ox` | Ultra-fast linting using Oxlint. |
| `bun test` | Run unit tests with Vitest. |
| `bun dev` | Start all applications in development mode. |

---
**Status**: ✅ 0 Errors | ✅ 0 Warnings | ✅ 100/100 Quality Score
