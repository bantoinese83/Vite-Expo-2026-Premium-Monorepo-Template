import { google } from "@ai-sdk/google";
import { type LanguageModel, generateText, streamText } from "ai";
import type { z } from "zod";

/**
 * Shared AI Logic for the 2026 Monorepo
 *
 * This package abstracts AI model interactions, providing a unified
 * interface for both Web (Vite) and Mobile (Expo).
 */

export const defaultModel: LanguageModel = google("gemini-1.5-pro-latest");

export interface AIRequestOptions {
  prompt: string;
  system?: string;
  temperature?: number;
  maxTokens?: number;
}

/**
 * Standard text generation
 */
export async function completeText(options: AIRequestOptions) {
  const { text } = await generateText({
    model: defaultModel,
    system: options.system || "You are a helpful assistant in a high-performance 2026 application.",
    prompt: options.prompt,
  });
  return text;
}

const parseAndValidate = <T extends z.ZodType>(schema: T, response: string) => {
  try {
    return schema.parse(JSON.parse(response));
  } catch (e) {
    throw new Error(`AI generated invalid schema: ${e}`);
  }
};

/**
 * Structured data generation (Type-safe)
 */
export async function generateObject<T extends z.ZodType>(schema: T, options: AIRequestOptions) {
  const promptWithSchema = {
    ...options,
    system: `${
      options.system || ""
    }\n\nIMPORTANT: Return ONLY valid JSON that matches this schema: ${JSON.stringify(schema)}`,
  };

  const response = await completeText(promptWithSchema);
  return parseAndValidate(schema, response);
}

/**
 * Streaming helper for React components
 */
export * from "./prompts";
export { streamText };
