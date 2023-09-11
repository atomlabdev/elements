import React from "react";
import { View } from "react-native";
import { Badge } from "../../src/components/Badge";
import tailwind from "twrnc";

const BoxMeta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    text: "Badge",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "destructive"],
    },
  },
};

export default BoxMeta;

export const Default = {};

export const Success = {
  args: {
    variant: "success",
    text: "Success",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
    text: "Destructive",
  },
};
