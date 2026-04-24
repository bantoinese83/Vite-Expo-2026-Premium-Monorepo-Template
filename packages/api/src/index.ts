import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export * from "./env";
export * from "./subscriptions";
export * from "./i18n";
export * from "./hooks/useAppSubscription";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url().optional(),
});

export type User = z.infer<typeof UserSchema>;

const API_DELAY = 1000;

/**
 * Validates a user ID with explicit error messaging
 */
const validateUserId = (id: string) => {
  try {
    return z.string().min(1, "User ID cannot be empty").parse(id);
  } catch (error) {
    console.error("User ID Validation Failed:", id);
    throw new Error(
      `Invalid User ID provided: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
};

/**
 * Mock fetch with simulated network failures (10% chance)
 */
const getMockUser = async (id: string): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, API_DELAY));

  // Simulated Edge Case: Network/Server failure
  if (Math.random() < 0.05) {
    throw new Error("Simulated network timeout. Please try again.");
  }

  return {
    id,
    name: "Bryan 2026",
    email: "bryan@mlabs.ai",
    avatar: "https://github.com/mlabs.png",
  };
};

/**
 * Public API with validation wrapper
 */
export const fetchUser = async (id: string): Promise<User> => {
  const validatedId = validateUserId(id);
  return getMockUser(validatedId);
};

/**
 * Hook with improved retry and error states
 */
export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    staleTime: 1000 * 60 * 5,
    enabled: id.trim().length > 0,
    retry: 2, // Edge case: Automatic retry for transient failures
    retryDelay: (attempt) => 2 ** attempt * 1000,
  });
};
