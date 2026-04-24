/**
 * 📳 Tactical Feedback Utility
 * Commercially optimized to improve user action satisfaction.
 */

// biome-ignore lint/suspicious/noExplicitAny: Haptics dynamic import
const runNativeHaptic = async (action: (haptics: any) => Promise<void>) => {
  try {
    const { Platform } = await import("react-native");
    if (Platform.OS === "web") return;

    const Haptics = await import("expo-haptics");
    await action(Haptics);
  } catch (_e) {
    // Safe fallback for non-native environments
  }
};

export const feedback = {
  success: () =>
    // biome-ignore lint/suspicious/noExplicitAny: Haptics type varies across platforms
    runNativeHaptic(async (h: any) => h.notificationAsync(h.NotificationFeedbackType.Success)),
  // biome-ignore lint/suspicious/noExplicitAny: Haptics type varies across platforms
  impact: () => runNativeHaptic(async (h: any) => h.impactAsync(h.ImpactFeedbackStyle.Medium)),
  // biome-ignore lint/suspicious/noExplicitAny: Haptics type varies across platforms
  light: () => runNativeHaptic(async (h: any) => h.selectionAsync()),
};
