import { Stack } from "expo-router/stack";
import tailwind, { useDeviceContext } from "twrnc";
import { useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();
  useDeviceContext(tailwind);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? tailwind.color("bg-gray-700")
              : tailwind.color("bg-gray-50"),
        },
        headerTitleStyle: {
          color:
            colorScheme === "dark"
              ? tailwind.color("text-white")
              : tailwind.color("text-black"),
        },
        headerTintColor:
          colorScheme === "dark"
            ? tailwind.color("text-white")
            : tailwind.color("text-black"),
        contentStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? tailwind.color("bg-gray-900")
              : tailwind.color("bg-gray-50"),
          overflow: "scroll",
        },
      }}
    />
  );
}
