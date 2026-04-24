import pino from "pino";

/**
 * 📝 Centralized Log Aggregation
 * Ready to be connected to Axiom, BetterStack, or Datadog.
 */
export const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  transport:
    process.env.NODE_ENV !== "production"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        }
      : undefined,
});
