import * as Sentry from "@sentry/react";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import posthog from "posthog-js";
import React from "react";
import ReactDOM from "react-dom/client";
import "@repo/api/src/i18n";
import App from "./App";
import "./global.css";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN || "",
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

posthog.init(process.env.VITE_POSTHOG_KEY || "phc_dummy_key", {
  api_host: "https://app.posthog.com",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

import { GlobalErrorBoundary } from "@repo/ui";

// biome-ignore lint/style/noNonNullAssertion: Root element is required by React
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </PersistQueryClientProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
);
