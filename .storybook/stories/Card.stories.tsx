import React from "react";
import { View } from "react-native";
import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
} from "../../src/components/Card";

const CardMeta = {
  title: "Components/Card",
  component: Card,
};

export default CardMeta;

export const WithImage = {
  render: (args) => {
    return (
      <View className="w-full flex-1 items-center justify-center bg-slate-100">
        <Card>
          <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
          <CardContent>
            <CardTitle>Title here</CardTitle>
          </CardContent>
        </Card>
      </View>
    );
  },
};
