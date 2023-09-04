import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../../src/components/Avatar";
import tailwind from "twrnc";

const BoxMeta = {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "radio",
      options: ["circle", "rounded"],
    },
  },
};

export default BoxMeta;

export const Default = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1676824452052-b030b9026b5b",
          }}
          {...args}
        />
      </View>
    );
  },
};

export const Rounded = {
  args: {
    type: "rounded",
  },
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1676824452052-b030b9026b5b",
          }}
          {...args}
        />
      </View>
    );
  },
};
