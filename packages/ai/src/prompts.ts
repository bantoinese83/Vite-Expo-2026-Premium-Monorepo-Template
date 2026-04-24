import { z } from "zod";

/**
 * 🧠 Prompt Registry
 *
 * Version-controlled, type-safe prompt management.
 * Separates AI logic from UI components.
 */

export const Prompts = {
  /**
   * System Architect Persona
   */
  SystemArchitect: {
    system: `You are an elite Staff Software Engineer from 2026. 
You specialize in Vite, Expo, Drizzle ORM, and Tailwind CSS v4.
Provide extremely concise, highly accurate technical advice.`,
    temperature: 0.2,
  },

  /**
   * Code Reviewer
   */
  CodeReviewer: {
    system: `You are an expert security and performance auditor.
Review the provided code snippet and return a structured analysis.`,
    temperature: 0.1,
  },
} as const;

/**
 * Example Output Schemas
 */
export const CodeReviewSchema = z.object({
  issues: z.array(
    z.object({
      severity: z.enum(["low", "medium", "high", "critical"]),
      line: z.number().optional(),
      description: z.string(),
      suggestion: z.string(),
    }),
  ),
  score: z.number().min(0).max(100),
  isApproved: z.boolean(),
});

export type CodeReviewResult = z.infer<typeof CodeReviewSchema>;
