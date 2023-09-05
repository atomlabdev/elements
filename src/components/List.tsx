import { View, Text, FlatList, ViewStyle, TextStyle } from "react-native";
import tailwind from "twrnc";

type BulletListItem = {
  key: string;
};

type BulletListProps = {
  items: BulletListItem[];
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export const BulletList = ({
  items,
  containerStyle,
  textStyle,
}: BulletListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => {
        return (
          <View style={[tailwind`mb-2`, containerStyle]}>
            <Text
              style={[tailwind`text-lg`, textStyle]}
            >{`\u2022 ${item.key}`}</Text>
          </View>
        );
      }}
    />
  );
};
