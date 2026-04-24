import { betterAuth } from "better-auth";

/**
 * 🛡️ Better Auth Configuration (2026 Standard)
 *
 * Pre-configured for Edge environments (Vercel Edge / Cloudflare Workers).
 * Handles cross-platform sessions (Web + Mobile Deep Linking).
 */
export const auth = betterAuth({
  database: {
    // In a real app, you would pass your Drizzle DB instance here:
    // dialect: "postgres",
    // db: yourDrizzleDbInstance,
    provider: "memory", // Placeholder for template
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
  // Advanced 2026 Edge optimizations
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
    defaultCookieAttributes: {
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
});
