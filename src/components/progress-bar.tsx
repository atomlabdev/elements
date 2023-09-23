import { DimensionValue, View } from "react-native";

type ProgressBarProps = {
  complete: number;
  containerStyle?: string;
  barStyle?: string;
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
    <View className={`h-4 bg-slate-100 rounded-full w-full ${containerStyle}`}>
      <View
        className={`h-4 bg-blue-400 rounded-full ${barStyle}`}
        style={{ width: getWidth() as DimensionValue }}
      />
    </View>
  );
};
