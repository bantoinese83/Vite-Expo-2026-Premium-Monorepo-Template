import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * Shared Database client for the 2026 Monorepo.
 * Optimized for Vercel Edge / Cloudflare Workers using Neon HTTP.
 *
 * Uses lazy initialization to prevent crashes if DATABASE_URL is missing during build/test.
 */

const getConnectionString = () => {
  return process.env.DATABASE_URL || "postgres://localhost:5432/db";
};

let dbInstance: ReturnType<typeof drizzle> | null = null;

export const getDb = () => {
  if (dbInstance) return dbInstance;

  const client = neon(getConnectionString());
  dbInstance = drizzle(client, { schema });
  return dbInstance;
};

// Users should call getDb() to ensure lazy initialization
// export const db = getDb();

export * from "drizzle-orm";
export * from "./schema";
