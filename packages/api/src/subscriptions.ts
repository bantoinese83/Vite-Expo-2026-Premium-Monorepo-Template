import { create } from "zustand";

interface SubscriptionState {
  isPro: boolean;
  isLoading: boolean;
  setPro: (status: boolean) => void;
  checkSubscription: () => Promise<void>;
}

/**
 * Shared Subscription Store
 * In a real app, this would call RevenueCat (Mobile) or Stripe (Web)
 */
export const useSubscription = create<SubscriptionState>((set) => ({
  isPro: false,
  isLoading: false,
  setPro: (status) => set({ isPro: status }),
  checkSubscription: async () => {
    set({ isLoading: true });
    try {
      // Mock API call - Replace with RevenueCat/Stripe logic
      await new Promise((resolve) => setTimeout(resolve, 800));
      // set({ isPro: true }); 
    } finally {
      set({ isLoading: false });
    }
  },
}));
