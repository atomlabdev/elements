import React from "react";
import { View } from "react-native";
import { Button } from "../../src/components/Button";
import tailwind from "twrnc";

const ButtonMeta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "radio", options: ["default", "success", "destructive"] },
    type: { control: "radio", options: ["default", "pill"] },
  },
  args: {
    text: "Tap here",
    color: "success",
  },
};

export default ButtonMeta;

export const Default = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Button {...args} />
      </View>
    );
  },
};

export const Pill = {
  args: {
    type: "pill",
  },
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Button {...args} />
      </View>
    );
  },
};
