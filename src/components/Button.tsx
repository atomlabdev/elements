import { useState } from "react";
import { Pressable, PressableProps, Text, TextStyle } from "react-native";

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
      bg: "bg-slate-900 dark:bg-slate-100",
      hover: "bg-slate-900 dark:bg-slate-200",
      text: "text-white dark:text-slate-900",
    },
    success: {
      bg: "bg-green-700",
      hover: "bg-green-800",
      text: "text-green-50",
    },
    destructive: {
      bg: "bg-red-700",
      hover: "bg-red-800",
      text: "text-red-50",
    },
  };

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`h-10 px-4 items-center justify-center rounded-md ${
        styles[variant].bg
      } ${hovered || pressed ? styles[variant].hover : null} ${style}`}
      {...props}
    >
      {text ? (
        <Text className={`font-bold ${styles[variant].text} ${textStyle}`}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
};
