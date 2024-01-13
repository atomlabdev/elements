import { View, Text } from "react-native";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  usePathname,
  useSegments,
} from "expo-router";
import { useEffect } from "react";
import components from "@/data/components";
import { ExamplePreview } from "@/previews/ExamplePreview";

export default function Page() {
  const path = usePathname();
  const pathArr = path.split("/").filter((s) => s !== "");
  const componentSlug = pathArr[1];
  const exampleSlug = pathArr[2];

  const component = components.find((c) => c.slug === componentSlug);

  if (!component) {
    return (
      <View>
        <Text>Component not found</Text>
      </View>
    );
  }

  const example = component.examples.find((e) => e === exampleSlug);

  console.log("finding example", component.examples, exampleSlug);

  if (!example) {
    return (
      <View>
        <Text>Example not found</Text>
      </View>
    );
  }

  return <ExamplePreview component={component.slug} example={example} />;
}
