import { View, Text, FlatList, ViewStyle, TextStyle } from "react-native";
import tailwind from "twrnc";

type ListItem = {
  key: string;
};

type ListProps = {
  variant?: "bullet" | "hyphenated" | "squared";
  listItemStyle?: ViewStyle;
  textStyle?: TextStyle;
  data: ListItem[];
};

/**
 * React Native list component built with Tailwind CSS
 */
export const List = ({
  variant = "bullet",
  data,
  listItemStyle,
  textStyle,
}: ListProps) => {
  const variants = {
    bullet: "\u2022",
    hyphenated: "\u2043",
    squared: "\u25A0",
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={[tailwind`mb-2`, listItemStyle]}>
            <Text
              style={[
                tailwind`text-neutral-700 dark:text-neutral-200`,
                textStyle,
              ]}
            >{`${variants[variant]} ${item.key}`}</Text>
          </View>
        );
      }}
    />
  );
};
