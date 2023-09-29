const items = [
  { key: "Tokyo" },
  { key: "Delhi" },
  { key: "Shanghai" },
  { key: "Sao Paolo" },
  { key: "Mexico City" },
  { key: "Cairo" },
  { key: "Dhaka" },
  { key: "Mumbai" },
  { key: "Beijing" },
  { key: "Osaka" },
];

import React from "react";
import { View } from "react-native";
import { BulletList } from "../../src/components/List";
import tailwind from "twrnc";

const ListMeta = {
  title: "Components/List",
};

export default ListMeta;

export const BulletListExample = {
  render: (args) => {
    return (
      <View style={tailwind`bg-gray-50 flex-1 items-center justify-center`}>
        <BulletList items={items} />
      </View>
    );
  },
};
