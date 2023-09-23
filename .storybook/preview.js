import { View } from "react-native";

export const parameters = {};

export const decorators = [
  (Story) => {
    return (
      <View className="flex-1 bg-white dark:bg-black p-8 justify-center items-center">
        <Story />
      </View>
    );
  },
];
