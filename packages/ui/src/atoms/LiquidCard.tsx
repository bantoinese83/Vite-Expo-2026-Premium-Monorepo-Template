import { type ClassValue, clsx } from "clsx";
import { MotiView } from "moti";
import { memo } from "react";
import { View, type ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LiquidCardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glass?: boolean;
}

/**
 * 💎 LiquidCard - A premium, animated surface for 2026.
 * Features glassmorphism and subtle entry animations.
 */
export const LiquidCard = memo(
  ({ children, className, delay = 0, glass = true, ...props }: LiquidCardProps) => {
    return (
      <MotiView
        from={{ opacity: 0, scale: 0.95, translateY: 10 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{
          type: "timing",
          duration: 800,
          delay,
          easing: (t) => t * (2 - t), // Subtle ease out
        }}
        {...(props as any)}
        className={cn(
          "p-6 rounded-3xl border border-white/10 shadow-2xl overflow-hidden",
          glass ? "bg-card/80 backdrop-blur-xl" : "bg-card",
          className,
        )}
      >
        {/* Liquid Metal Accent - Subtle top highlight */}
        <View className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

        {children}
      </MotiView>
    );
  },
);

LiquidCard.displayName = "LiquidCard";
