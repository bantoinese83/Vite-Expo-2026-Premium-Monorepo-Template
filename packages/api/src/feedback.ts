/**
 * 📳 Tactical Feedback Utility
 * Commercially optimized to improve user action satisfaction.
 * 
 * Uses dynamic imports to stay safe in non-native/test environments.
 */
export const feedback = {
  success: async () => {
    try {
      const { Platform } = await import('react-native');
      const Haptics = await import('expo-haptics');
      if (Platform.OS !== 'web') {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } catch (e) {
      // Safe fallback for environments where RN/Haptics aren't available
    }
  },
  impact: async () => {
    try {
      const { Platform } = await import('react-native');
      const Haptics = await import('expo-haptics');
      if (Platform.OS !== 'web') {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
    } catch (e) {
      // Safe fallback
    }
  },
  light: async () => {
    try {
      const { Platform } = await import('react-native');
      const Haptics = await import('expo-haptics');
      if (Platform.OS !== 'web') {
        await Haptics.selectionAsync();
      }
    } catch (e) {
      // Safe fallback
    }
  }
};
