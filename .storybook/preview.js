import { View } from "react-native";
import tailwind from "twrnc";

export const parameters = {};

export const decorators = [
  (Story) => {
    return (
      <View
        style={tailwind`flex-1 bg-white dark:bg-black p-8 justify-center items-center`}
      >
        <Story />
      </View>
    );
  },
];
