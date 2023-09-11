import React from "react";
import { View, Text } from "react-native";
import { Box } from "../../src/components/Box";

const BoxMeta = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "destructive"],
    },
  },
  render: (args) => {
    return (
      <Box {...args}>
        <Text>This is a box</Text>
      </Box>
    );
  },
};

export default BoxMeta;

export const Default = {};

export const Success = {
  args: {
    variant: "success",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
  },
};
