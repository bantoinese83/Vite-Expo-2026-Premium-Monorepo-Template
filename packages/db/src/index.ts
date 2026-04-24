import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * Shared Database client for the 2026 Monorepo.
 * Optimized for Vercel Edge / Cloudflare Workers using Neon HTTP.
 */

// In a real app, this would come from an environment variable
const connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/db";

const client = neon(connectionString);
export const db = drizzle(client, { schema });

export * from "drizzle-orm";
export * from "./schema";
