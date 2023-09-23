import { ProgressBar } from "@/components/progress-bar";
import { View } from "react-native";

export const ProgressBarExample = () => {
  return (
    <View className="w-72">
      <ProgressBar complete={60} />
    </View>
  );
};
