import { useState } from "react";
import { Text } from "react-native";
import { Switch } from "@/components/switch";
import tailwind from "twrnc";

export const StyledContainerSwitchExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Switch
      value={isSelected}
      onValueChange={setIsSelected}
      containerStyle={tailwind`px-4 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg`}
      trackColor={{
        true: tailwind.color("bg-green-400"),
        false: tailwind.color("bg-gray-400"),
      }}
      label={() => (
        <Text style={tailwind`text-gray-950 dark:text-gray-50 font-bold`}>
          Remember Me
        </Text>
      )}
    />
  );
};
