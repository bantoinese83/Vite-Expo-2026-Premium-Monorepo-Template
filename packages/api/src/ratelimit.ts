import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * 🛡️ Edge-ready Rate Limiting
 * Protects your API from DoS and abuse using Upstash Redis.
 */
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  // Allow 10 requests per 10 seconds
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
});
