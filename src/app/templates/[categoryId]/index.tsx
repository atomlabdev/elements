import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import templates from "@/data/templates";
import tailwind from "twrnc";
import { Link } from "expo-router";

export default function Page() {
  const { categoryId } = useLocalSearchParams();

  const category = templates.find((c) => c.slug === categoryId);

  if (!category) {
    return (
      <View>
        <Text>Category not found</Text>
      </View>
    );
  }

  return (
    <View style={tailwind`p-8`}>
      <Text style={tailwind`text-white font-bold mb-4`}>{category.name}</Text>
      <FlatList
        data={category.examples}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <Link
              href={`/templates/${category.slug}/${item}`}
              style={tailwind`mb-8`}
            >
              <Text style={tailwind`text-blue-700 dark:text-white font-bold`}>
                {item}
              </Text>
            </Link>
          );
        }}
      />
    </View>
  );
}
