import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import components from "@/data/components";
import tailwind from "twrnc";
import { Link } from "expo-router";

export default function Page() {
  const { slug } = useLocalSearchParams();

  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return (
      <View>
        <Text>Component not found</Text>
      </View>
    );
  }

  return (
    <View style={tailwind`p-8`}>
      <Text
        style={tailwind`text-lg text-gray-950 dark:text-white font-bold mb-8`}
      >
        {component.name}
      </Text>
      <FlatList
        data={component.examples}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <Link
              href={`/components/${component.slug}/${item}`}
              style={tailwind`mb-8 bg-gray-700 dark:bg-gray-100 h-12 px-4 flex items-center rounded-md`}
            >
              <Text style={tailwind`text-white dark:text-gray-950 font-bold`}>
                {item}
              </Text>
            </Link>
          );
        }}
      />
    </View>
  );
}
