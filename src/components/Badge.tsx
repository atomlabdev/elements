import React from "react";
import { View, Text } from "react-native";
import tailwind from "twrnc";

type BadgeColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "teal"
  | "indigo"
  | "fuchsia"
  | "pink";
type BadgeSize = "sm" | "md" | "lg";

type BadgeProps = {
  text: string;
  size?: BadgeSize;
  color?: BadgeColor;
};

export const Badge = ({ text, size, color }: BadgeProps) => {
  const getBgColor = () => {
    if (color) {
      return `bg-${color}-700`;
    }

    return "bg-slate-700";
  };

  const getTextColor = () => {
    if (color) {
      return `text-${color}-50`;
    }

    return "text-slate-50";
  };

  const getSize = () => {
    if (size === "lg") return "h-10 px-4";
    if (size === "md") return "h-8 px-3";

    return "h-6 px-2";
  };

  const getTextSize = () => {
    if (size === "lg") return "text-lg";
    if (size === "md") return "text-base";

    return "text-xs";
  };

  return (
    <View
      style={tailwind`justify-center ${getBgColor()} ${getSize()} rounded-md`}
    >
      <Text style={tailwind`${getTextColor()} ${getTextSize()} font-bold`}>
        {text}
      </Text>
    </View>
  );
};
