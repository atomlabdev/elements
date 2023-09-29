import { View, ViewProps } from "react-native";
import tailwind from "twrnc";

interface BoxProps extends ViewProps {
  variant?: "default" | "success" | "destructive";
}

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
    <View style={[tailwind`px-4 py-2`, variants[variant], style]} {...props}>
      {children}
    </View>
  );
};
