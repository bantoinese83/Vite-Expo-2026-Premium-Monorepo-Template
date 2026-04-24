import { useCallback, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar, Alert } from "react-native";
import { InfoSection, Card, Button, Paywall, FeatureGate } from "@repo/ui";
import { useUser, useSubscription } from "@repo/api";

const SCROLL_VIEW_CONTENT_STYLE = { paddingBottom: 40 };

export default function Home() {
  const { data: user, isLoading: isUserLoading } = useUser("1");
  const { isPro, isLoading: isSubLoading, setPro, checkSubscription } = useSubscription();

  useEffect(() => {
    checkSubscription();
  }, [checkSubscription]);

  const handleUpgrade = useCallback(() => {
    // In a real app, trigger RevenueCat here
    Alert.alert("Upgrade", "In a real app, this would open the App Store checkout.", [
      { text: "Cancel", style: "cancel" },
      { text: "Demo Upgrade", onPress: () => setPro(true) },
    ]);
  }, [setPro]);

  const handleExplore = useCallback(() => {
    console.log("Explore");
  }, []);

  const handleSignOut = useCallback(() => {
    console.log("Sign Out");
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />
      <ScrollView className="flex-1" contentContainerStyle={SCROLL_VIEW_CONTENT_STYLE}>
        <View className="px-6 py-12 space-y-12">
          {/* Header */}
          <View className="space-y-4">
            <View 
              importantForAccessibility="no-hide-descendants"
              accessibilityElementsHidden={true}
              className="w-12 h-12 rounded-2xl bg-primary items-center justify-center"
            >
              <Text className="text-primary-foreground text-2xl font-black">M</Text>
            </View>
            <Text accessibilityRole="header" className="text-4xl font-black text-foreground tracking-tighter">
              Welcome Back
            </Text>
            <View accessibilityLiveRegion="polite">
              {isUserLoading ? (
                <View accessibilityLabel="Loading profile..." className="h-6 w-32 bg-muted rounded animate-pulse" />
              ) : (
                <Text className="text-xl text-primary font-medium">
                  {user?.name || "Developer"}
                </Text>
              )}
            </View>
          </View>

          {/* Quick Actions */}
          <Card className="p-8">
            <InfoSection
              title="Native Performance"
              description="This app is running with zero overhead. Experience the speed of NativeWind v4 and Expo SDK 55."
              buttonTitle="Explore Features"
              onButtonPress={handleExplore}
            />
          </Card>

          {/* Stats/Cards */}
          <View className="flex-row space-x-4">
            <View 
              accessible={true}
              accessibilityLabel="100 Quality Score"
              className="flex-1"
            >
              <Card className="p-6 items-center justify-center space-y-2">
                <Text className="text-3xl font-black text-foreground">100</Text>
                <Text className="text-muted-foreground text-xs uppercase font-bold tracking-widest">Quality</Text>
              </Card>
            </View>
            <View 
              accessible={true}
              accessibilityLabel="0 Errors reported"
              className="flex-1"
            >
              <Card className="p-6 items-center justify-center space-y-2">
                <Text className="text-3xl font-black text-foreground">0</Text>
                <Text className="text-muted-foreground text-xs uppercase font-bold tracking-widest">Errors</Text>
              </Card>
            </View>
          </View>

          {/* Premium Section */}
          <View className="space-y-6">
            <View className="flex-row items-center justify-between px-1">
              <Text className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Premium Features
              </Text>
              {isPro && (
                <View className="bg-primary/10 px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-black text-primary uppercase">Pro Active</Text>
                </View>
              )}
            </View>

            {isPro ? (
              <Card variant="default" className="p-6 bg-primary/5 border-primary/20">
                <Text className="text-lg font-bold text-foreground">Advanced Analytics</Text>
                <Text className="text-muted-foreground mt-1">
                  You now have access to real-time data streaming and advanced architectural metrics.
                </Text>
              </Card>
            ) : (
              <Paywall 
                onUpgrade={handleUpgrade} 
                isLoading={isSubLoading}
              />
            )}
          </View>

          {/* New Pro-Only Feature: System Insights */}
          <View className="space-y-4">
            <Text className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">
              System Insights
            </Text>
            <FeatureGate
              isPro={isPro}
              onUpgrade={handleUpgrade}
              isLoading={isSubLoading}
              title="Unlock System Insights"
              description="See real-time performance metrics and monorepo health stats."
            >
              <Card variant="outline" className="p-6 space-y-4">
                <View className="flex-row justify-between">
                  <Text className="text-muted-foreground">JS Bundle Size</Text>
                  <Text className="font-bold text-foreground">2.4 MB</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-muted-foreground">Cold Start Time</Text>
                  <Text className="font-bold text-primary">420ms</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-muted-foreground">Cache Hit Rate</Text>
                  <Text className="font-bold text-foreground">98.2%</Text>
                </View>
              </Card>
            </FeatureGate>
          </View>

          {/* Logout/Action */}
          <Button 
            title="Sign Out" 
            onPress={handleSignOut} 
            variant="outline"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
