import { View, ViewProps } from "react-native";
import tailwind from "twrnc";

interface BoxProps extends ViewProps {
  variant?: "default" | "success" | "destructive";
}

/**
 * React Native box component built with Tailwind CSS
 */
export const Box = ({
  variant = "default",
  style,
  children,
  ...props
}: BoxProps) => {
  const variants = {
    default: tailwind`bg-gray-100`,
    success: tailwind`bg-green-200`,
    destructive: tailwind`bg-red-200`,
  };

  return (
    <View {...props} style={[tailwind`px-4 py-2`, variants[variant], style]}>
      {children}
    </View>
  );
};
