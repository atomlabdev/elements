import { View, Text, ViewStyle } from "react-native";
import tailwind from "twrnc";

type BoxColor = "default" | "success" | "destructive";

type BoxProps = {
  color?: BoxColor;
  styles?: ViewStyle;
};

export const Box = ({ color, styles }: BoxProps) => {
  const getBgColor = (color?: BoxColor) => {
    if (color === "success") {
      return "bg-green-200";
    }

    if (color === "destructive") {
      return "bg-red-200";
    }

    return "bg-slate-100";
  };

  return (
    <View style={[tailwind`${getBgColor(color)} px-4 py-2`, styles]}>
      <Text style={tailwind`text-slate-900 text-lg`}>Box</Text>
    </View>
  );
};
