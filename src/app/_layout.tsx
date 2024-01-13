import { Stack } from "expo-router/stack";
import tailwind, { useDeviceContext } from "twrnc";
import { SafeAreaView, useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();
  useDeviceContext(tailwind);

  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? tailwind.color("bg-neutral-950")
                : tailwind.color("bg-neutral-50"),
            overflow: "scroll",
          },
        }}
      />
    </SafeAreaView>
  );
}
