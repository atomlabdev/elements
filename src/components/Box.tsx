import { View, ViewProps } from "react-native";

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
    default: "bg-slate-100",
    success: "bg-green-200",
    destructive: "bg-red-200",
  };

  return (
    <View className={`px-4 py-2 ${variants[variant]}`} {...props}>
      {children}
    </View>
  );
};
