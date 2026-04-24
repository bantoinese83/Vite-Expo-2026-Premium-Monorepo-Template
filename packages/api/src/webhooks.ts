import { logger } from "./logger";

/**
 * 🪝 Webhook Receiver Stub
 * Handle asynchronous events from Stripe or RevenueCat securely.
 */
export async function handleStripeWebhook(_payload: unknown, signature: string) {
  logger.info({ signature }, "Received Stripe Webhook");
  // Verify signature and process payment success, cancellation, etc.
  return { status: "received" };
}

const getRevenueCatEventType = (payload: unknown) => {
  if (typeof payload === "object" && payload !== null && "event" in payload) {
    return (payload as { event?: { type?: string } }).event?.type;
  }
  return undefined;
};

export async function handleRevenueCatWebhook(payload: unknown) {
  const eventType = getRevenueCatEventType(payload);
  logger.info({ eventType }, "Received RevenueCat Webhook");
  // Sync 'Pro' status to your database based on Apple/Google subscription events
  return { status: "synced" };
}
