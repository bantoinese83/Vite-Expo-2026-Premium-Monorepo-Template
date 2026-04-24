import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/**
 * 2026 Core Data Schema
 */

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const aiInteractions = pgTable("ai_interactions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  prompt: text("prompt").notNull(),
  response: text("response").notNull(),
  model: text("model").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
