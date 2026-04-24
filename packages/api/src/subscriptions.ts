import { create } from "zustand";

interface SubscriptionState {
  isPro: boolean;
  isLoading: boolean;
  error: string | null;
  setPro: (status: boolean) => void;
  checkSubscription: () => Promise<void>;
  resetError: () => void;
}

/**
 * Shared Subscription Store with Error Handling
 */
export const useSubscription = create<SubscriptionState>((set) => ({
  isPro: false,
  isLoading: false,
  error: null,
  setPro: (status) => set({ isPro: status, error: null }),
  resetError: () => set({ error: null }),
  checkSubscription: async () => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simulated Edge Case: Subscription sync failure (5% chance)
      if (Math.random() < 0.05) {
        throw new Error("Unable to sync subscription status.");
      }
    } catch (e) {
      set({ error: e instanceof Error ? e.message : "Subscription check failed." });
    } finally {
      set({ isLoading: false });
    }
  },
}));
