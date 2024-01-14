import { Box } from "@/components/box";
import { Text } from "react-native";
import tailwind from "twrnc";

export const DefaultBoxExample = () => {
  return (
    <Box>
      <Text style={tailwind`text-neutral-950 dark:text-neutral-50 text-lg`}>
        Box
      </Text>
    </Box>
  );
};
