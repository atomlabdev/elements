import { useState } from "react";
import { Text } from "react-native";
import { Switch } from "@/components/switch";
import tailwind from "twrnc";

export const WithLabelSwitchExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Switch
      value={isSelected}
      onValueChange={setIsSelected}
      label={() => (
        <Text style={tailwind`text-gray-950 dark:text-gray-50 font-bold`}>
          Remember Me
        </Text>
      )}
    />
  );
};
