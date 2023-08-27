import { useState } from "react";
import { Pressable, Text } from "react-native";
import tailwind from "twrnc";

type ButtonColor = "success" | "destructive";
type ButtonType = "bordered" | "pill";

type ButtonProps = {
  type?: ButtonType;
  color?: ButtonColor;
  text?: string;
};

const colors = {
  default: {
    bg: "bg-slate-800 dark:bg-slate-100",
    hover: "bg-slate-900 dark:bg-slate-200",
    text: "text-white dark:text-slate-900",
  },
  success: {
    bg: "bg-green-500",
    hover: "bg-green-600",
    text: "text-green-50",
  },
  destructive: {
    bg: "bg-red-500",
    hover: "bg-red-600",
    text: "text-red-50",
  },
};

const types = {
  default: "rounded-lg",
  pill: "rounded-full",
};

const getBgColor = (color: ButtonColor) => {
  if (color) {
    return colors[color].bg;
  }

  return colors["default"].bg;
};

const getHoverBgColor = (color: ButtonColor) => {
  if (color) {
    return colors[color].hover;
  }

  return colors["default"].hover;
};

const getTextColor = (color: ButtonColor) => {
  if (color) {
    return colors[color].text;
  }

  return colors["default"].text;
};

const getType = (type) => {
  if (type) {
    return types[type];
  }

  return types["default"];
};

export const Button = ({ text, color, type }: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getStyle = () => {
    let styleArr = ["h-12 px-4 items-center justify-center"];
    styleArr.push(getType(type));
    styleArr.push(getBgColor(color));

    if (hovered || pressed) {
      styleArr.push(getHoverBgColor(color));
    }

    return tailwind`${styleArr.join(" ")}`;
  };

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={getStyle()}
    >
      {text ? (
        <Text style={tailwind`${getTextColor(color)} font-bold text-base`}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
};
