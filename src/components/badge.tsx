import React from "react";
import { View, Text, ViewProps } from "react-native";
import tailwind from "twrnc";

interface BadgeProps extends ViewProps {
  variant?: "default" | "success" | "destructive";
  text: string;
}

export const Badge = ({ variant = "default", text, style }: BadgeProps) => {
  const variants = {
    default: {
      container: tailwind`bg-gray-100`,
      text: tailwind`text-gray-900`,
    },
    success: {
      container: tailwind`bg-green-700`,
      text: tailwind`text-green-50`,
    },
    destructive: {
      container: tailwind`bg-red-700`,
      text: tailwind`text-red-50`,
    },
  };

  return (
    <View
      style={[
        tailwind`h-6 px-3 justify-center rounded-full`,
        variants[variant].container,
        style,
      ]}
    >
      <Text style={[tailwind`text-xs font-bold`, variants[variant].text]}>
        {text}
      </Text>
    </View>
  );
};
