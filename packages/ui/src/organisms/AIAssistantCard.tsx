import { Cpu, ShieldCheck, Sparkles } from "lucide-react-native";
import { memo } from "react";
import { Text, View } from "react-native";
import { LiquidCard } from "../atoms/LiquidCard";
import { LiquidSkeleton } from "../atoms/LiquidSkeleton";

interface AIAssistantCardProps {
  isLoading: boolean;
  insight?: string;
  persona?: "architect" | "security";
  onAction?: () => void;
}

/**
 * 🧠 AIAssistantCard
 * Premium AI-native UI component with high-end animations and iconography.
 */
export const AIAssistantCard = memo(
  ({ isLoading, insight, persona = "architect" }: AIAssistantCardProps) => {
    return (
      <LiquidCard glass={true} className="p-8 border-primary/20 bg-primary/5">
        <View className="flex-row items-center space-x-3 mb-6">
          <View className="w-10 h-10 rounded-xl bg-primary items-center justify-center">
            {persona === "architect" ? (
              <Cpu size={20} color="#000" strokeWidth={2.5} />
            ) : (
              <ShieldCheck size={20} color="#000" strokeWidth={2.5} />
            )}
          </View>
          <View>
            <Text className="text-foreground font-black text-xl tracking-tighter">
              AI {persona === "architect" ? "Architect" : "Security Auditor"}
            </Text>
            <Text className="text-muted-foreground text-xs uppercase font-bold tracking-widest">
              2026 Engine Active
            </Text>
          </View>
        </View>

        {isLoading ? (
          <View className="space-y-3">
            <LiquidSkeleton width="90%" height={16} />
            <LiquidSkeleton width="100%" height={16} />
            <LiquidSkeleton width="40%" height={16} />
          </View>
        ) : insight ? (
          <View className="space-y-4">
            <Text className="text-foreground/90 text-lg leading-relaxed italic">"{insight}"</Text>
            <View className="flex-row items-center space-x-2 pt-2">
              <Sparkles size={14} color="#94a3b8" />
              <Text className="text-muted-foreground text-xs font-medium">
                Context-aware suggestion generated just now.
              </Text>
            </View>
          </View>
        ) : (
          <Text className="text-muted-foreground leading-relaxed">
            Tap the button below to generate an elite architectural analysis of your current stack.
          </Text>
        )}
      </LiquidCard>
    );
  },
);

AIAssistantCard.displayName = "AIAssistantCard";
