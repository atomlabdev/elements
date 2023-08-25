import React from "react";
import { View } from "react-native";
import { Button } from "../../src/components/Button";

const ButtonMeta = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
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

export const AnotherExample = {
  args: {
    text: "Another example",
  },
};
