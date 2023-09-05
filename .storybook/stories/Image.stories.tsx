import React from "react";
import { View, Text } from "react-native";
import {
  CircleImage,
  RoundedImage,
  SquareImage,
} from "../../src/components/Image";
import tailwind from "twrnc";

const ImageMeta = {
  title: "Image",
  component: Image,
};

export default ImageMeta;

export const SquareImageExample = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <SquareImage source={{ uri: "https://source.unsplash.com/random" }} />
      </View>
    );
  },
};

export const RoundedImageExample = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <RoundedImage source={{ uri: "https://source.unsplash.com/random" }} />
      </View>
    );
  },
};

export const CircleImageExample = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <CircleImage source={{ uri: "https://source.unsplash.com/random" }} />
      </View>
    );
  },
};
