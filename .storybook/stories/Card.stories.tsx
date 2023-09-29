import React from "react";
import { View, Text } from "react-native";
import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
} from "../../src/components/card";
import tailwind from "twrnc";

const CardMeta = {
  title: "Components/Card",
  component: Card,
};

export default CardMeta;

export const WithImage = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Card style={tailwind`w-72`}>
          <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
          <CardContent>
            <CardTitle>Title here</CardTitle>
          </CardContent>
        </Card>
      </View>
    );
  },
};
