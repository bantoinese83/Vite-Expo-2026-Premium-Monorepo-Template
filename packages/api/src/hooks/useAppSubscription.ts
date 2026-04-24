import { useCallback, useEffect } from "react";
import { useSubscription } from "../subscriptions";

/**
 * 🔗 useAppSubscription Hook
 * DRY: Centralizes subscription initialization, error handling, and upgrade logic.
 */
export const useAppSubscription = () => {
  const { isPro, isLoading, error, setPro, checkSubscription, resetError } = useSubscription();

  useEffect(() => {
    checkSubscription();
  }, [checkSubscription]);

  const handleUpgrade = useCallback(async () => {
    // Shared simulation logic
    // In a real app, this would branch between Stripe (Web) and RevenueCat (Mobile)
    return new Promise<boolean>((resolve) => {
      // We return the logic to the UI to handle the actual Platform-specific UI (Alert vs Confirm)
      resolve(true);
    });
  }, []);

  const handleRetry = useCallback(() => {
    checkSubscription();
    resetError();
  }, [checkSubscription, resetError]);

  return {
    isPro,
    isLoading,
    subError: error,
    setPro,
    handleUpgrade,
    handleRetry,
    checkSubscription,
  };
};
