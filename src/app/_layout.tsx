import { Stack } from "expo-router/stack";
import tailwind, { useDeviceContext } from "twrnc";
import { useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();
  useDeviceContext(tailwind);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
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
