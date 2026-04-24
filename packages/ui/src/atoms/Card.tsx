import { memo } from "react";
import { View, type ViewProps } from "react-native";

interface CardProps {
  children: ViewProps["children"];
  className?: string;
  variant?: "default" | "outline" | "ghost";
  glass?: boolean;
}

const variantStyles = {
  default: (glass: boolean) => (glass ? "bg-card/80" : "bg-card"),
  outline: () => "bg-transparent border-2 border-border",
  ghost: () => "bg-transparent border-none shadow-none",
};

export const Card = memo(
  ({ children, className = "", variant = "default", glass = true }: CardProps) => {
    return (
      <View
        className={`p-6 rounded-3xl border border-white/10 shadow-2xl ${variantStyles[variant](glass)} ${className}`}
        style={{ pointerEvents: "auto" }}
      >
        {children}
      </View>
    );
  },
);

Card.displayName = "Card";
