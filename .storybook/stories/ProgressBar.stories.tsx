import React from "react";
import { View } from "react-native";
import { BulletList } from "../../src/components/List";
import tailwind from "twrnc";
import { ProgressBar } from "../../src/components/ProgressBar";

const ProgressBarMeta = {
  title: "Components/Progress Bar",
};

export default ProgressBarMeta;

export const ProgressBarExample = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center p-4`}>
        <ProgressBar complete={60} />
      </View>
    );
  },
};
