import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export * from "./env";
export * from "./subscriptions";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url().optional(),
});

export type User = z.infer<typeof UserSchema>;

const API_DELAY = 1000;

export const fetchUser = async (id: string): Promise<User> => {
  // Security: Validate ID format to prevent unexpected behavior or injection risks
  const validatedId = z.string().min(1).parse(id);

  await new Promise((resolve) => setTimeout(resolve, API_DELAY));
  return {
    id: validatedId,
    name: "Bryan 2026",
    email: "bryan@mlabs.ai",
    avatar: "https://github.com/mlabs.png",
  };
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: id.length > 0, // Defense in depth: don't even fire the query if ID is empty
  });
};
