import React from "react";
import { View } from "react-native";
import { Button } from "../../src/components/Button";

const ButtonMeta = {
  title: "Button",
  component: Button,
  argTypes: {
    color: { control: "radio", options: ["default", "success", "destructive"] },
    type: { control: "radio", options: ["default", "pill"] },
  },
  args: {
    text: "Tap here",
    color: "success",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic = {};
