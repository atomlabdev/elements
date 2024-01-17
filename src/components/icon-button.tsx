import { ViewStyle } from "react-native";
import tailwind from "twrnc";
import { Button, ButtonIcon, ButtonVariant } from "@/components/button";
import { IconProps } from "@/components/icon";

type IconButtonProps = {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon: IconProps;
  style?: ViewStyle;
};

/**
 * React Native icon button component built with Tailwind CSS
 */
export const IconButton = ({
  icon,
  variant = "default",
  style,
  size = "md",
}: IconButtonProps) => {
  const sizes = {
    sm: {
      container: tailwind`w-10 h-10`,
      icon: 18,
    },
    md: {
      container: tailwind`w-14 h-14`,
      icon: 24,
    },
    lg: {
      container: tailwind`w-18 h-18`,
      icon: 32,
    },
  };

  return (
    <Button
      variant={variant}
      style={[tailwind`rounded-full`, sizes[size].container, style]}
    >
      <ButtonIcon
        name={icon.name}
        type={icon.type}
        size={icon.size || sizes[size].icon}
      />
    </Button>
  );
};
