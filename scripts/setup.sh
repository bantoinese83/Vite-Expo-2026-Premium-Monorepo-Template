#!/usr/bin/env bash
set -e

echo "🚀 Setting up the 2026 Monorepo Template..."

if ! command -v bun &> /dev/null
then
    echo "❌ Bun could not be found. Please install it first (https://bun.sh)"
    exit 1
fi

echo "📦 Installing dependencies..."
bun install

if [ ! -f .env ]; then
    echo "🔑 Creating .env from .env.example (please update it with your real keys)..."
    echo "DATABASE_URL=postgres://localhost:5432/db" > .env
    echo "EXPO_PUBLIC_SENTRY_DSN=" >> .env
    echo "VITE_POSTHOG_KEY=" >> .env
fi

echo "🔧 Generating DB schema..."
cd packages/db && bun run db:generate || echo "Database generation skipped."

echo "✅ Setup complete! Run 'bun dev' to start building."
