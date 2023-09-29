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
  text: string;
  textStyle: TextStyle;
}

export const Button = ({
  text,
  variant = "default",
  style,
  textStyle,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const styles = {
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
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        tailwind`h-10 px-4 items-center justify-center rounded-md`,
        styles[variant].bg,
        hovered || pressed ? styles[variant].hover : null,
        // todo: fix ts error
        style as ViewStyle,
      ]}
      {...props}
    >
      {text ? (
        <Text style={[tailwind`font-bold`, styles[variant].text, textStyle]}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
};
