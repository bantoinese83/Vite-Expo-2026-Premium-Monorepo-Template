import { memo } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  accessibilityLabel?: string;
}

const variantStyles = {
  primary: "bg-primary active:bg-primary/80 shadow-lg shadow-primary/20 web:focus:ring-primary",
  secondary: "bg-card active:bg-card/80 border border-white/10 web:focus:ring-border",
  outline: "bg-transparent border-2 border-primary active:bg-primary/10 web:focus:ring-primary",
};

const textStyles = {
  primary: "text-primary-foreground",
  secondary: "text-foreground",
  outline: "text-primary",
};

export const Button = memo(({
  title,
  onPress,
  variant = "primary",
  isLoading = false,
  disabled = false,
  className = "",
  accessibilityLabel,
}: ButtonProps) => {
  const isInteractionDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isInteractionDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{
        disabled: isInteractionDisabled,
        busy: isLoading,
      }}
      className={`px-8 py-4 rounded-2xl flex-row items-center justify-center active:scale-[0.98] web:focus:ring-2 web:focus:ring-offset-2 web:outline-none transition-all ${variantStyles[variant]} ${disabled ? "opacity-50" : ""} ${className}`}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === "primary" ? "#000" : "#fff"} />
      ) : (
        <Text className={`font-bold text-lg text-center ${textStyles[variant]}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
});

Button.displayName = "Button";
