import React from "react";
import { View, Text } from "react-native";
import { Box } from "../../src/components/Box";

const BoxMeta = {
  title: "Box",
  component: Box,
  argTypes: {
    color: { control: "radio", options: ["default", "success", "destructive"] },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default BoxMeta;

export const Basic = {};
