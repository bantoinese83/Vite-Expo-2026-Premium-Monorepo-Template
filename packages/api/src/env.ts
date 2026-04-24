import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  VITE_API_URL: z.string().url().optional(),
});

// Since process.env isn't directly available in standard ways on all platforms
// in Expo/Vite without specific plugins, we do a best-effort merge.
const processEnv = typeof process !== 'undefined' ? process.env : {};
const importMetaEnv = typeof import.meta !== 'undefined' ? (import.meta as any).env : {};

export const env = envSchema.parse({
  ...processEnv,
  ...importMetaEnv,
});