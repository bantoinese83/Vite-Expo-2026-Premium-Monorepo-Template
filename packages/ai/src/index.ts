import { google } from "@ai-sdk/google";
import { type LanguageModel, generateText, streamText } from "ai";
import type { z } from "zod";

/**
 * Shared AI Logic for the 2026 Monorepo
 *
 * Handles edge cases like malformed JSON, model refusal, and network failures.
 */

export const defaultModel: LanguageModel = google("gemini-1.5-pro-latest");

export interface AIRequestOptions {
  prompt: string;
  system?: string;
  temperature?: number;
  maxTokens?: number;
}

/**
 * Standard text generation with error wrapping
 */
export async function completeText(options: AIRequestOptions) {
  try {
    const { text } = await generateText({
      model: defaultModel,
      system:
        options.system || "You are a helpful assistant in a high-performance 2026 application.",
      prompt: options.prompt,
    });

    if (!text) {
      throw new Error("AI returned an empty response.");
    }

    return text;
  } catch (error) {
    console.error("AI Completion Error:", error);
    throw new Error(
      `Failed to generate AI response: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Parses and validates AI response with deep checking
 */
const parseAndValidate = <T extends z.ZodType>(schema: T, response: string) => {
  if (!response || response.trim() === "") {
    throw new Error("Received empty response from AI model.");
  }

  try {
    // Edge case: Remove markdown code blocks if AI accidentally included them
    const cleanJSON = response.replace(/```json\n?|```/g, "").trim();
    const parsed = JSON.parse(cleanJSON);
    return schema.parse(parsed);
  } catch (e) {
    console.error("AI Validation Error. Raw response:", response);
    throw new Error(
      `AI generated invalid schema or malformed JSON: ${e instanceof Error ? e.message : "Parse failed"}`,
    );
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
    }\n\nIMPORTANT: Return ONLY valid JSON. No conversational text. Schema: ${JSON.stringify(schema)}`,
  };

  const response = await completeText(promptWithSchema);
  return parseAndValidate(schema, response);
}

/**
 * Streaming helper for React components
 */
export * from "./prompts";
export { streamText };
