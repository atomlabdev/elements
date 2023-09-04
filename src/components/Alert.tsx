import { View, Text } from "react-native";
import tailwind from "twrnc";

type AlertProps = {
  type?: "solid" | "bordered";
  color?: "default" | "success" | "warning" | "error";
};

export const Alert = ({ type, color }: AlertProps) => {
  const getType = () => {
    if (type === "bordered") return "border";
    return "";
  };

  const getColor = () => {
    if (type === "bordered") {
      if (color === "error") {
        return "bg-slate-100 border-red-200";
      }

      if (color === "success") {
        return "bg-slate-100 border-emerald-200";
      }

      if (color === "warning") {
        return "bg-slate-100 border-orange-200";
      }

      return "bg-slate-100 border-slate-200";
    }

    if (color === "error") {
      return "bg-red-500";
    }

    if (color === "success") {
      return "bg-emerald-500";
    }

    if (color === "warning") {
      return "bg-orange-500";
    }

    return "bg-slate-200";
  };

  const getTextColor = () => {
    if (type === "bordered") {
      if (color === "error") return "text-red-600";
      if (color === "success") return "text-emerald-600";
      if (color === "warning") return "text-orange-600";
    }
    if (color && color !== "default") return "text-white";
    return "text-slate-900";
  };

  return (
    <View style={tailwind`w-full p-4 rounded-md ${getType()} ${getColor()}`}>
      <Text style={tailwind`${getTextColor()} font-bold`}>
        Your order is currently being processed
      </Text>
    </View>
  );
};
