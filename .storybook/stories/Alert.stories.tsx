import React from "react";
import { View, Text } from "react-native";
import tailwind from "twrnc";
import { Alert } from "../../src/components/Alert";

const AlertMeta = {
  title: "Components/Alert",
  component: Alert,
  args: {
    title: "Alert Title",
    description: "This is the alert description",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "error", "warning"],
    },
  },
};

export default AlertMeta;

export const Default = {};

export const Success = {
  args: {
    variant: "success",
  },
};

export const Warning = {
  args: {
    variant: "warning",
  },
};

export const Error = {
  args: {
    variant: "error",
  },
};
