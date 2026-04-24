import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * Shared Database client for the 2026 Monorepo.
 * This can be used in Edge functions (Web) or Serverless environments.
 */

// In a real app, this would come from an environment variable
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/db';

const client = postgres(connectionString);
export const db = drizzle(client, { schema });

export * from 'drizzle-orm';
export * from './schema';
