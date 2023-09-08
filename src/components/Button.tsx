import { useState } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import tailwind from "twrnc";

type ButtonVariant = "default" | "success" | "destructive";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  text: string;
  onPress?: () => void;
}

export const Button = ({
  text,
  variant = "default",
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const styles = {
    default: {
      bg: tailwind`bg-slate-900 dark:bg-slate-100`,
      hover: tailwind`bg-slate-900 dark:bg-slate-200`,
      text: tailwind`text-white dark:text-slate-900`,
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
      ]}
      {...props}
    >
      {text ? (
        <Text style={[tailwind`font-bold`, styles[variant].text]}>{text}</Text>
      ) : null}
    </Pressable>
  );
};
