import React from "react";
import { View } from "react-native";
import { Badge } from "../../src/components/Badge";
import tailwind from "twrnc";

const BoxMeta = {
  title: "Badge",
  component: Badge,
  args: {
    text: "Badge",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "radio",
      options: [
        "red",
        "green",
        "blue",
        "orange",
        "teal",
        "indigo",
        "fuchsia",
        "pink",
      ],
    },
  },
};

export default BoxMeta;

export const Basic = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Badge {...args} />
      </View>
    );
  },
};
