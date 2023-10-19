import { Select } from "@/components/select";
import { View } from "react-native";
import { useState } from "react";
import tailwind from "twrnc";

export const SelectExample = () => {
  const [value, setValue] = useState(null);

  const items = [
    {
      key: "cairo",
      value: "cairo",
      label: "Cairo",
    },
    {
      key: "los-angeles",
      value: "los-angeles",
      label: "Los Angeles",
    },
    {
      key: "manchester",
      value: "manchester",
      label: "Manchester",
    },
    {
      key: "buenos-aires",
      value: "buenos-aires",
      label: "Buenos Aires",
    },
    {
      key: "nairobi",
      value: "nairobi",
      label: "Nairobi",
    },
  ];

  return (
    <View style={tailwind`w-full`}>
      <Select items={items} value={value} onValueChange={setValue} />
    </View>
  );
};
