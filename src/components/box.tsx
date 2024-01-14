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
    default: tailwind`bg-neutral-100 dark:bg-neutral-900`,
    success: tailwind`bg-green-100 dark:bg-green-900`,
    destructive: tailwind`bg-red-100 dark:bg-red-900`,
  };

  return (
    <View
      {...props}
      style={[
        tailwind`px-4 py-2 border border-black/20 dark:border-white/20`,
        variants[variant],
        style,
      ]}
    >
      {children}
    </View>
  );
};
