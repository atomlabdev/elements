import { List } from "@/components/list";
import { View } from "react-native";
import tailwind from "twrnc";

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

export const HyphenatedListExample = () => {
  return (
    <View style={tailwind`w-full`}>
      <List data={items} variant="hyphenated" />
    </View>
  );
};
