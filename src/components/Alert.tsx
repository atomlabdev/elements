import { View, Text, ViewProps, ViewStyle, TextStyle } from "react-native";
import tailwind from "twrnc";

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
      bg: tailwind`bg-gray-100`,
      text: tailwind`text-gray-900`,
    },
    success: {
      bg: tailwind`bg-emerald-100`,
      text: tailwind`text-emerald-900`,
    },
    warning: {
      bg: tailwind`bg-amber-100`,
      text: tailwind`text-amber-900`,
    },
    error: {
      bg: tailwind`bg-red-100`,
      text: tailwind`text-red-900`,
    },
  };

  return (
    <View
      style={[
        tailwind`w-full p-4 rounded-md`,
        variants[variant].bg,
        containerStyle,
      ]}
      {...props}
    >
      <View style={tailwind`flex-col gap-1`}>
        {title ? (
          <Text
            style={[
              tailwind`text-lg font-bold`,
              variants[variant].text,
              titleStyle,
            ]}
          >
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text style={[variants[variant].text, descriptionStyle]}>
            {description}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
