/// <reference types="nativewind/types" />
import { useAppSubscription } from "@repo/api";
import { Button, Card, FeatureGate, InfoSection, PremiumFeatureCard } from "@repo/ui";
import { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";

function App() {
  const { isPro, isLoading, subError, setPro, handleRetry } = useAppSubscription();

  const handleUpgrade = useCallback(() => {
    // In a real app, trigger Stripe here
    const confirm = window.confirm(
      "In a real app, this would open Stripe Checkout. Want to simulate an upgrade?",
    );
    if (confirm) setPro(true);
  }, [setPro]);

  const handleGetStarted = useCallback(() => {
    console.log("Get Started");
  }, []);

  const handleDocs = useCallback(() => {
    console.log("Docs");
  }, []);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* Hero Section */}
        <View className="items-center space-y-8">
          <View className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Text className="text-primary text-sm font-medium">Vite + Expo Monorepo 2026</Text>
          </View>

          <Text
            accessibilityRole="header"
            className="text-7xl font-black text-center tracking-tighter text-foreground"
          >
            Build once.{"\n"}
            <Text className="text-primary/50">Run everywhere.</Text>
          </Text>

          <Text className="text-xl text-muted-foreground text-center max-w-2xl leading-relaxed">
            The ultimate starter template for high-performance cross-platform applications. Native
            speed, web flexibility, and 100/100 quality score.
          </Text>

          <View className="flex-row space-x-4 pt-4">
            <Button title="Get Started" onPress={handleGetStarted} variant="primary" />
            <Button title="Documentation" onPress={handleDocs} variant="secondary" />
          </View>
        </View>

        {subError && (
          <Card className="max-w-xl mx-auto p-6 bg-destructive/10 border-destructive/20 items-center space-y-4">
            <Text className="text-destructive font-bold text-lg text-center">{subError}</Text>
            <Button
              title="Retry Subscription Check"
              onPress={handleRetry}
              variant="outline"
              className="px-8"
            />
          </Card>
        )}

        {/* Feature Grid */}
        <View className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <View className="flex-1">
            <Card>
              <InfoSection
                title="Turbo-Powered"
                description="Full monorepo orchestration with Turborepo for lightning-fast builds and zero-overhead task execution."
              />
            </Card>
          </View>

          <View className="flex-1">
            <Card>
              <InfoSection
                title="Shared Logic"
                description="Centralized API and UI packages ensure your business logic and design system stay consistent across platforms."
              />
            </Card>
          </View>

          <View className="flex-1">
            <Card>
              <InfoSection
                title="Native Performance"
                description="Direct access to native APIs on iOS and Android while maintaining a seamless React Native Web experience."
              />
            </Card>
          </View>

          <View className="flex-1">
            <Card>
              <InfoSection
                title="Type Safe"
                description="Strict TypeScript configuration across the entire monorepo with zero errors and perfect maintainability."
              />
            </Card>
          </View>
        </View>

        {/* Premium Section */}
        <View className="space-y-12">
          <View className="items-center space-y-4">
            <Text className="text-4xl font-black tracking-tighter">Premium Features</Text>
            <Text className="text-muted-foreground text-center max-w-xl">
              Take your development workflow to the next level with our enterprise-grade Pro tools.
            </Text>
          </View>

          <View className="max-w-4xl mx-auto w-full space-y-8">
            <PremiumFeatureCard
              isPro={isPro}
              title="Monorepo Telemetry"
              description="Unified dashboard for tracking package usage, build metrics, and shared logic efficiency."
            />

            <FeatureGate
              isPro={isPro}
              onUpgrade={handleUpgrade}
              isLoading={isLoading}
              title="Unlock Pro Metrics"
              description="Get access to detailed build analytics and dependency insights."
            >
              <View className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-8 items-center bg-primary/5 border-primary/20">
                  <Text className="text-sm text-muted-foreground uppercase font-bold">
                    Build Time
                  </Text>
                  <Text className="text-4xl font-black mt-2">1.2s</Text>
                </Card>
                <Card className="p-8 items-center bg-primary/5 border-primary/20">
                  <Text className="text-sm text-muted-foreground uppercase font-bold">
                    Tree Shaking
                  </Text>
                  <Text className="text-4xl font-black mt-2">94%</Text>
                </Card>
                <Card className="p-8 items-center bg-primary/5 border-primary/20">
                  <Text className="text-sm text-muted-foreground uppercase font-bold">
                    Tests Passed
                  </Text>
                  <Text className="text-4xl font-black mt-2">100%</Text>
                </Card>
              </View>
            </FeatureGate>
          </View>
        </View>

        {/* Footer */}
        <View className="border-t border-border pt-12 items-center">
          <Text className="text-muted-foreground">
            © 2026 Monorepo Template. Built with ❤️ for developers.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;
