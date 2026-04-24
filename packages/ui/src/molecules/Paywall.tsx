import { memo } from "react";
import { Text, View } from "react-native";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";

interface PaywallProps {
  title?: string;
  description?: string;
  onUpgrade: () => void;
  isLoading?: boolean;
}

export const Paywall = memo(
  ({
    title = "Unlock Pro Features",
    description = "Get access to exclusive content, advanced analytics, and priority support.",
    onUpgrade,
    isLoading = false,
  }: PaywallProps) => {
    return (
      <Card className="p-8 border-primary/20 bg-primary/5">
        <View className="items-center space-y-4">
          <View className="bg-primary/10 p-4 rounded-full">
            <Text className="text-3xl">✨</Text>
          </View>
          <Text className="text-2xl font-black text-center text-foreground">{title}</Text>
          <Text className="text-muted-foreground text-center leading-relaxed">{description}</Text>
          <Button
            title="Upgrade to Pro"
            onPress={onUpgrade}
            isLoading={isLoading}
            className="w-full mt-4"
          />
        </View>
      </Card>
    );
  },
);

Paywall.displayName = "Paywall";
