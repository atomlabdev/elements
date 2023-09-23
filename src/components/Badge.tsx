import React from "react";
import { View, Text, ViewProps } from "react-native";

interface BadgeProps extends ViewProps {
  variant?: "default" | "success" | "destructive";
  text: string;
}

export const Badge = ({ variant = "default", text, style }: BadgeProps) => {
  const variants = {
    default: {
      container: "bg-slate-100",
      text: "text-slate-900",
    },
    success: {
      container: "bg-green-700",
      text: "text-green-50",
    },
    destructive: {
      container: "bg-red-700",
      text: "text-red-50",
    },
  };

  return (
    <View
      className={`h-6 px-3 justify-center rounded-full ${variants[variant].container} ${style}`}
    >
      <Text className={`text-xs font-bold ${variants[variant].text}`}>
        {text}
      </Text>
    </View>
  );
};
