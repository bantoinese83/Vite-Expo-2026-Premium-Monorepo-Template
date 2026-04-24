import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __DEV__: process.env.NODE_ENV !== "production",
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
      "lucide-react-native": path.resolve(__dirname, "node_modules/lucide-react"),
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@repo/api": path.resolve(__dirname, "../../packages/api/src"),
      "@repo/db": path.resolve(__dirname, "../../packages/db/src"),
      "@repo/ai": path.resolve(__dirname, "../../packages/ai/src"),
      "@repo/tailwind-config": path.resolve(__dirname, "../../packages/tailwind-config"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, "."),
        path.resolve(__dirname, "../../packages"),
        path.resolve(__dirname, "../../node_modules"),
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      resolveExtensions: [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".mjs",
      ],
    },
  },
});
