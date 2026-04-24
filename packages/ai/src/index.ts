import { generateText, streamText, type LanguageModel } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

/**
 * Shared AI Logic for the 2026 Monorepo
 * 
 * This package abstracts AI model interactions, providing a unified
 * interface for both Web (Vite) and Mobile (Expo).
 */

export const defaultModel: LanguageModel = google('gemini-1.5-pro-latest');

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
    system: options.system || 'You are a helpful assistant in a high-performance 2026 application.',
    prompt: options.prompt,
  });
  return text;
}

/**
 * Structured data generation (Type-safe)
 */
export async function generateObject<T extends z.ZodType>(
  schema: T,
  options: AIRequestOptions
) {
  // In a real implementation, you would use generateObject from 'ai'
  // For this template, we'll return a helper that ensures Zod validation
  const response = await completeText({
    ...options,
    system: `${options.system || ''}\n\nIMPORTANT: Return ONLY valid JSON that matches this schema: ${JSON.stringify(schema)}`,
  });

  try {
    return schema.parse(JSON.parse(response));
  } catch (e) {
    throw new Error(`AI generated invalid schema: ${e}`);
  }
}

/**
 * Streaming helper for React components
 */
export { streamText };
