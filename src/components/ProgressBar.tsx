import { View, ViewStyle } from "react-native";
import tailwind from "twrnc";

type ProgressBarProps = {
  complete: number;
  containerStyle?: ViewStyle;
  barStyle?: ViewStyle;
};

export const ProgressBar = ({
  complete,
  containerStyle,
  barStyle,
}: ProgressBarProps) => {
  const getWidth = () => {
    if (complete > 100) {
      return "100%";
    }

    if (complete < 0) {
      return "0%";
    }

    return `${complete}%`;
  };

  return (
    <View
      style={[tailwind`h-4 bg-gray-100 rounded-full w-full`, containerStyle]}
    >
      <View
        style={[
          tailwind`h-4 bg-blue-400 rounded-full`,
          barStyle,
          { width: getWidth() },
        ]}
      />
    </View>
  );
};
