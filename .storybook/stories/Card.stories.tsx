import React from "react";
import { View, Text } from "react-native";
import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
} from "../../src/components/Card";
import tailwind from "twrnc";

const CardMeta = {
  title: "Card",
  component: Card,
};

export default CardMeta;

export const WithImage = {
  render: (args) => {
    return (
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Card>
          <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
          <CardContent>
            <CardTitle title="Title here" />
          </CardContent>
        </Card>
      </View>
    );
  },
};
