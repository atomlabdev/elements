import React from "react";
import { View } from "react-native";
import { ProgressBar } from "../../src/components/ProgressBar";

const ProgressBarMeta = {
  title: "Components/Progress Bar",
};

export default ProgressBarMeta;

export const ProgressBarExample = {
  render: (args) => {
    return (
      <View className="flex-1 items-center justify-center p-4 w-72">
        <ProgressBar complete={60} />
      </View>
    );
  },
};
