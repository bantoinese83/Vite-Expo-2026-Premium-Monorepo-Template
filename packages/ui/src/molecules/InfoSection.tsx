import { memo } from "react";
import { View, Text } from "react-native";
import { Button } from "../atoms/Button";

interface InfoSectionProps {
  title: string;
  description: string;
  buttonTitle?: string;
  onButtonPress?: () => void;
  className?: string;
}

export const InfoSection = memo(({
  title,
  description,
  buttonTitle,
  onButtonPress,
  className = "",
}: InfoSectionProps) => {
  return (
    <View className={`space-y-4 ${className}`}>
      <Text className="text-3xl font-black text-foreground tracking-tighter">
        {title}
      </Text>
      <Text className="text-foreground/60 text-lg leading-relaxed">
        {description}
      </Text>
      {buttonTitle && onButtonPress && (
        <Button title={buttonTitle} onPress={onButtonPress} className="mt-4" />
      )}
    </View>
  );
});

InfoSection.displayName = "InfoSection";
