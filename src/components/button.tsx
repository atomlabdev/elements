import { useState } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import tailwind from "twrnc";

type ButtonVariant = "default" | "success" | "destructive";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  icon?: (style: TextStyle[]) => React.ReactNode;
  text: string;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
}

export const Button = ({
  text,
  icon,
  variant = "default",
  style,
  textStyle,
  iconStyle,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const variants = {
    default: {
      bg: tailwind`bg-gray-900 dark:bg-gray-100`,
      hover: tailwind`bg-gray-900 dark:bg-gray-200`,
      text: tailwind`text-gray-50 dark:text-gray-900`,
    },
    success: {
      bg: tailwind`bg-green-700`,
      hover: tailwind`bg-green-800`,
      text: tailwind`text-green-50`,
    },
    destructive: {
      bg: tailwind`bg-red-700`,
      hover: tailwind`bg-red-800`,
      text: tailwind`text-red-50`,
    },
  };

  return (
    <Pressable
      {...props}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        tailwind`h-10 px-4 flex-row gap-2 items-center justify-center rounded-md`,
        variants[variant].bg,
        hovered || pressed ? variants[variant].hover : null,
        // todo: fix ts error
        style as ViewStyle,
      ]}
    >
      {icon
        ? icon([tailwind`text-lg`, variants[variant].text, iconStyle])
        : null}
      {text ? (
        <Text style={[tailwind`font-bold`, variants[variant].text, textStyle]}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
};
