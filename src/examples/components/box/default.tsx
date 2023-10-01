import { Box } from "@/components/box";
import { Text } from "react-native";
import tailwind from "twrnc";

export const DefaultBoxExample = () => {
  return (
    <Box>
      <Text style={tailwind`text-slate-900 text-lg`}>Box</Text>
    </Box>
  );
};
