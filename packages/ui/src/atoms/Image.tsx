import { type ClassValue, clsx } from "clsx";
import { Image as ExpoImage, type ImageProps as ExpoImageProps } from "expo-image";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImageProps extends ExpoImageProps {
  className?: string;
}

/**
 * 🖼️ Premium Image Primitive
 * Uses expo-image natively for high-performance caching and webp support.
 * Falls back safely on web environments.
 */
export const Image = memo(({ className, ...props }: ImageProps) => {
  return (
    <ExpoImage
      {...props}
      className={cn("overflow-hidden", className)}
      transition={200}
      cachePolicy="memory-disk" // Aggressive caching for 2026 performance
    />
  );
});

Image.displayName = "Image";
