import { useState } from "react";
import { Pressable, TextStyle, Text } from "react-native";
import tailwind from "twrnc";

type IconButtonProps = {
  variant?: "default" | "success" | "destructive";
  size?: "sm" | "md" | "lg";
  icon: (style: TextStyle[]) => React.ReactNode;
};

/**
 * React Native icon button component built with Tailwind CSS
 */
export const IconButton = ({
  icon,
  variant = "default",
  size = "md",
}: IconButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const variants = {
    default: {
      container: tailwind`bg-gray-900 dark:bg-gray-100`,
      hover: tailwind`bg-gray-900 dark:bg-gray-200`,
      icon: tailwind`text-gray-50 dark:text-gray-900`,
    },
    success: {
      container: tailwind`bg-green-700`,
      hover: tailwind`bg-green-800`,
      icon: tailwind`text-green-50`,
    },
    destructive: {
      container: tailwind`bg-red-700`,
      hover: tailwind`bg-red-800`,
      icon: tailwind`text-red-50`,
    },
  };

  const sizes = {
    sm: {
      container: tailwind`w-10 h-10`,
      icon: tailwind`text-lg`,
    },
    md: {
      container: tailwind`w-14 h-14`,
      icon: tailwind`text-2xl`,
    },
    lg: {
      container: tailwind`w-18 h-18`,
      icon: tailwind`text-3xl`,
    },
  };

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        sizes[size].container,
        tailwind`rounded-full items-center justify-center`,
        hovered || pressed
          ? variants[variant].hover
          : variants[variant].container,
      ]}
    >
      <Text>
        {icon ? icon([sizes[size].icon, variants[variant].icon]) : ""}
      </Text>
    </Pressable>
  );
};
