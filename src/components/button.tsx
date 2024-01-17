import { createContext, useContext, useState } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  View,
  TextProps,
  ViewStyle,
} from "react-native";
import tailwind, { useAppColorScheme } from "twrnc";
import { Icon, IconProps } from "@/components/icon";

export type ButtonVariant =
  | "default"
  | "success"
  | "destructive"
  | "info"
  | "warning";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  text?: string;
  icon?: IconProps;
  selected?: boolean;
}

const VariantContext = createContext("default");

export const ButtonText = ({ style, children }: TextProps) => {
  const variant = useContext(VariantContext);

  const variants = {
    default: tailwind`text-neutral-50 dark:text-neutral-900`,
    success: tailwind`text-green-50`,
    destructive: tailwind`text-red-50`,
    warning: tailwind`text-orange-50`,
    info: tailwind`text-blue-50`,
  };

  return (
    <Text style={[tailwind`font-bold`, variants[variant], style]}>
      {children}
    </Text>
  );
};

export const ButtonIcon = ({ name, type, color, size }: IconProps) => {
  const [colorScheme] = useAppColorScheme(tailwind);
  const variant = useContext(VariantContext);

  const variants = {
    default: {
      light: tailwind.color("text-neutral-50"),
      dark: tailwind.color("text-neutral-900"),
    },
    destructive: {
      light: tailwind.color("text-red-50"),
      dark: tailwind.color("text-red-50"),
    },
    success: {
      light: tailwind.color("text-green-50"),
      dark: tailwind.color("text-green-50"),
    },
    warning: {
      light: tailwind.color("text-orange-50"),
      dark: tailwind.color("text-orange-50"),
    },
    info: {
      light: tailwind.color("text-blue-50"),
      dark: tailwind.color("text-blue-50"),
    },
  };

  const defaultColor =
    colorScheme === "dark" ? variants[variant].dark : variants[variant].light;

  return (
    <Icon
      name={name}
      type={type}
      size={size || 18}
      color={color || defaultColor}
    />
  );
};

/**
 * React Native button component built with Tailwind CSS
 */
export const Button = ({
  text,
  icon,
  variant = "default",
  selected,
  style,
  children,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const variants = {
    default: {
      bg: tailwind`bg-neutral-800 dark:bg-neutral-50`,
      hover: tailwind`bg-neutral-950 dark:bg-neutral-200`,
    },
    success: {
      bg: tailwind`bg-green-600 dark:bg-green-700`,
      hover: tailwind`bg-green-700 dark:bg-green-800`,
    },
    destructive: {
      bg: tailwind`bg-red-600 dark:bg-red-700`,
      hover: tailwind`bg-red-700 dark:bg-red-800`,
    },
    warning: {
      bg: tailwind`bg-orange-600 dark:bg-orange-700`,
      hover: tailwind`bg-orange-700 dark:bg-orange-800`,
    },
    info: {
      bg: tailwind`bg-blue-600 dark:bg-blue-700`,
      hover: tailwind`bg-blue-700 dark:bg-blue-800`,
    },
  };

  const renderContent = () => {
    if (icon && text) {
      return (
        <View style={tailwind`flex flex-row items-center gap-2`}>
          <ButtonIcon {...icon} />
          <ButtonText>{text}</ButtonText>
        </View>
      );
    }

    if (icon) {
      return (
        <View style={tailwind`flex flex-row items-center`}>
          {icon ? <ButtonIcon {...icon} /> : null}
          <>{children}</>
        </View>
      );
    }

    if (text) {
      return <ButtonText>{text}</ButtonText>;
    }

    if (typeof children === "string") {
      return <ButtonText>{children}</ButtonText>;
    }

    return <>{children}</>;
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
        hovered || pressed || selected ? variants[variant].hover : null,
        // todo: fix ts error
        style as ViewStyle,
      ]}
    >
      <VariantContext.Provider value={variant}>
        {renderContent()}
      </VariantContext.Provider>
    </Pressable>
  );
};
