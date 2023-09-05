import React from "react";
import { View } from "react-native";
import tailwind from "twrnc";
import { Alert } from "../../src/components/Alert";

const AlertMeta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    color: {
      control: "radio",
      options: ["default", "success", "error", "warning"],
    },
    type: { control: "radio", options: ["default", "bordered"] },
  },
};

export default AlertMeta;

export const Default = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center p-8`}>
        <Alert {...args} />
      </View>
    );
  },
};

export const Bordered = {
  args: {
    type: "bordered",
  },
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center p-8`}>
        <Alert {...args} />
      </View>
    );
  },
};
