import { View, Text, FlatList, ViewStyle, TextStyle } from "react-native";

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
          <View className={`mb-2 ${containerStyle}`}>
            <Text
              className={`text-lg ${textStyle}`}
            >{`\u2022 ${item.key}`}</Text>
          </View>
        );
      }}
    />
  );
};
