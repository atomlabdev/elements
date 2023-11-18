import { View, ViewStyle } from "react-native";
import tailwind from "twrnc";

type ProgressBarProps = {
  variant?: "default" | "success" | "destructive" | "warning";
  progress: number;
  containerStyle?: ViewStyle;
  barStyle?: ViewStyle;
};

/**
 * React Native progress bar component built with Tailwind CSS
 */
export const ProgressBar = ({
  variant = "default",
  progress,
  containerStyle,
  barStyle,
}: ProgressBarProps) => {
  const variants = {
    default: tailwind`bg-blue-400`,
    success: tailwind`bg-emerald-400`,
    destructive: tailwind`bg-red-400`,
    warning: tailwind`bg-amber-400`,
  };

  const getWidth = () => {
    if (progress > 100) {
      return "100%";
    }

    if (progress < 0) {
      return "0%";
    }

    return `${progress}%`;
  };

  return (
    <View
      style={[tailwind`h-4 bg-gray-100 rounded-full w-full`, containerStyle]}
    >
      <View
        style={[
          tailwind`h-4 rounded-full`,
          variants[variant],
          barStyle,
          { width: getWidth() },
        ]}
      />
    </View>
  );
};
