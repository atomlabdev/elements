import React from "react";
import { View, Text } from "react-native";
import { Box } from "../../src/components/Box";
import tailwind from "twrnc";

const BoxMeta = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    color: { control: "radio", options: ["default", "success", "destructive"] },
  },
};

export default BoxMeta;

export const Basic = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Box {...args}>
          <Text>This is a box</Text>
        </Box>
      </View>
    );
  },
};
