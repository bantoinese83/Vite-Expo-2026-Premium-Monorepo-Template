import { memo, ReactNode } from "react";
import { View, Text } from "react-native";
import { Paywall } from "./Paywall";

interface FeatureGateProps {
  isPro: boolean;
  children: ReactNode;
  title?: string;
  description?: string;
  onUpgrade: () => void;
  isLoading?: boolean;
}

export const FeatureGate = memo(({
  isPro,
  children,
  title,
  description,
  onUpgrade,
  isLoading,
}: FeatureGateProps) => {
  if (isPro) {
    return <>{children}</>;
  }

  return (
    <View className="relative">
      <View className="opacity-20 pointer-events-none" aria-hidden={true}>
        {children}
      </View>
      <View className="absolute inset-0 items-center justify-center p-4">
        <Paywall 
          title={title} 
          description={description} 
          onUpgrade={onUpgrade} 
          isLoading={isLoading}
        />
      </View>
    </View>
  );
});

FeatureGate.displayName = "FeatureGate";
