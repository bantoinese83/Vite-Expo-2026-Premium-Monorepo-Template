import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Sentry from "@sentry/react-native";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Stack } from "expo-router";
import { PostHogProvider } from "posthog-react-native";

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN || "",
  tracesSampleRate: 1.0,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

function RootLayout() {
  return (
    <PostHogProvider
      apiKey={process.env.EXPO_PUBLIC_POSTHOG_KEY || "phc_dummy_key"}
      options={{ host: "https://app.posthog.com" }}
    >
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
      >
        <Stack screenOptions={{ headerShown: false }} />
      </PersistQueryClientProvider>
    </PostHogProvider>
  );
}

export default Sentry.wrap(RootLayout);
