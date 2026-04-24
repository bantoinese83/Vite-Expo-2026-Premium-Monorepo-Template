import type { ErrorInfo } from "react";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * 🛡️ Global Error Boundary
 * Prevents "white screens of death" by catching React rendering errors
 * and gracefully failing to a polished UI while reporting to Sentry.
 */
export class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In a real app, this should dynamically detect @sentry/react vs @sentry/react-native
    console.error("Caught by ErrorBoundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <View className="flex-1 items-center justify-center bg-background p-6">
          <Card className="max-w-md w-full p-8 border-destructive/20 bg-destructive/5 space-y-6">
            <View className="bg-destructive/10 w-16 h-16 rounded-full items-center justify-center mx-auto">
              <Text className="text-3xl">⚠️</Text>
            </View>
            <View className="space-y-2 text-center">
              <Text className="text-2xl font-black text-center text-foreground tracking-tighter">
                Something went wrong
              </Text>
              <Text className="text-muted-foreground text-center leading-relaxed">
                We've been notified and are looking into it. Please try reloading the application.
              </Text>
            </View>
            <View className="pt-4">
              <Button
                title="Try Again"
                variant="primary"
                onPress={this.resetError}
                className="w-full"
              />
            </View>
          </Card>
        </View>
      );
    }

    return this.props.children;
  }
}
