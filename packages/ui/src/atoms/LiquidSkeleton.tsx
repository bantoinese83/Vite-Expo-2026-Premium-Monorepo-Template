import { type ClassValue, clsx } from "clsx";
import { Skeleton } from "moti/skeleton";
import { memo } from "react";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LiquidSkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number;
  className?: string;
}

/**
 * 💎 LiquidSkeleton - Premium Loading State
 * Integrated with the Liquid Metal design system.
 */
export const LiquidSkeleton = memo(
  ({ width = "100%", height = 20, radius = 12, className }: LiquidSkeletonProps) => {
    return (
      <View
        className={cn("overflow-hidden bg-white/5", className)}
        style={{ borderRadius: radius }}
      >
        <Skeleton
          colorMode="dark"
          // biome-ignore lint/suspicious/noExplicitAny: Moti Skeleton types are strict union of numbers
          width={width as any}
          // biome-ignore lint/suspicious/noExplicitAny: Moti Skeleton types are strict union of numbers
          height={height as any}
          // biome-ignore lint/suspicious/noExplicitAny: Moti Skeleton types are strict union of numbers
          radius={radius as any}
          backgroundColor="#1a1a1a"
        />
      </View>
    );
  },
);

LiquidSkeleton.displayName = "LiquidSkeleton";

export const LiquidCardSkeleton = memo(() => {
  return (
    <View className="p-8 rounded-3xl border border-white/10 bg-card/40 space-y-4">
      <LiquidSkeleton width={60} height={60} radius={16} />
      <LiquidSkeleton width="80%" height={28} />
      <LiquidSkeleton width="100%" height={16} />
      <LiquidSkeleton width="90%" height={16} />
      <View className="pt-4">
        <LiquidSkeleton width="100%" height={48} radius={16} />
      </View>
    </View>
  );
});

LiquidCardSkeleton.displayName = "LiquidCardSkeleton";
