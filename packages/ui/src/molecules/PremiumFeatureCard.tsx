import { memo } from "react";
import { Text, View } from "react-native";
import { Card } from "../atoms/Card";

interface PremiumFeatureCardProps {
  title: string;
  description: string;
  isPro: boolean;
}

/**
 * 💎 PremiumFeatureCard
 * DRY: Shared UI for displaying a premium feature with consistent "Pro" branding.
 */
export const PremiumFeatureCard = memo(({ title, description, isPro }: PremiumFeatureCardProps) => {
  return (
    <Card variant="default" className="p-6 bg-primary/5 border-primary/20">
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-lg font-bold text-foreground">{title}</Text>
        {isPro && (
          <View className="bg-primary/10 px-2 py-0.5 rounded-full">
            <Text className="text-[10px] font-black text-primary uppercase">Pro Active</Text>
          </View>
        )}
      </View>
      <Text className="text-muted-foreground leading-relaxed">{description}</Text>
    </Card>
  );
});

PremiumFeatureCard.displayName = "PremiumFeatureCard";
