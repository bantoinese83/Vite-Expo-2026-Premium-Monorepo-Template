import { type ClassValue, clsx } from "clsx";
import { MotiView } from "moti";
import { memo } from "react";
import { ActivityIndicator, Platform, Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LiquidButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  accessibilityLabel?: string;
}

const variantStyles = {
  primary: "bg-foreground web:hover:bg-foreground/90 shadow-lg shadow-foreground/20",
  secondary: "bg-secondary web:hover:bg-secondary/80",
  outline: "bg-transparent border-2 border-border web:hover:bg-secondary/50",
  ghost: "bg-transparent web:hover:bg-secondary/50",
};

const textStyles = {
  primary: "text-background",
  secondary: "text-secondary-foreground",
  outline: "text-foreground",
  ghost: "text-foreground",
};

/**
 * 💎 LiquidButton - Adaptive Component
 * Touch-optimized for mobile (larger hit area, scale animation),
 * Hover-optimized for web (hover states, focus rings).
 */
export const LiquidButton = memo(
  ({
    title,
    onPress,
    variant = "primary",
    isLoading = false,
    disabled = false,
    className = "",
    accessibilityLabel,
  }: LiquidButtonProps) => {
    const isInteractionDisabled = disabled || isLoading;
    const isWeb = Platform.OS === "web";

    return (
      <MotiView
        from={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <TouchableOpacity
          onPress={onPress}
          disabled={isInteractionDisabled}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel || title}
          accessibilityState={{
            disabled: isInteractionDisabled,
            busy: isLoading,
          }}
          activeOpacity={isWeb ? 0.8 : 0.6}
          className={cn(
            "flex-row items-center justify-center rounded-2xl transition-all",
            isWeb
              ? "px-6 py-3 web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
              : "px-8 py-4 active:scale-[0.98]",
            variantStyles[variant],
            disabled && "opacity-50",
            className,
          )}
        >
          {isLoading ? (
            <ActivityIndicator color={variant === "primary" ? "#000" : "#fff"} />
          ) : (
            <Text
              className={cn(
                "font-bold text-center",
                isWeb ? "text-sm" : "text-lg",
                textStyles[variant],
              )}
            >
              {title}
            </Text>
          )}
        </TouchableOpacity>
      </MotiView>
    );
  },
);

LiquidButton.displayName = "LiquidButton";
