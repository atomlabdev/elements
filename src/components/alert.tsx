import { View, Text, ViewProps, ViewStyle, TextStyle } from "react-native";

interface AlertProps extends ViewProps {
  variant?: "default" | "success" | "warning" | "error";
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  title?: string;
  description?: string;
}

export const Alert = ({
  variant = "default",
  title,
  description,
  containerStyle,
  titleStyle,
  descriptionStyle,
  ...props
}: AlertProps) => {
  const variants = {
    default: {
      bg: "bg-slate-100",
      text: "text-slate-900",
    },
    success: {
      bg: "bg-emerald-100",
      text: "text-emerald-900",
    },
    warning: {
      bg: "bg-amber-100",
      text: "text-amber-900",
    },
    error: {
      bg: "bg-red-100",
      text: "text-red-900",
    },
  };

  return (
    <View
      className={`w-full p-4 rounded-md ${variants[variant].bg} ${containerStyle}`}
      {...props}
    >
      <View className="flex-col gap-1">
        {title ? (
          <Text
            className={`text-lg font-bold ${variants[variant].text} ${titleStyle}`}
          >
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text className={`${variants[variant].text} ${descriptionStyle}`}>
            {description}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
