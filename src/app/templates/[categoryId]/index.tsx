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
      <Text
        style={tailwind`text-lg text-gray-950 dark:text-white font-bold mb-8`}
      >
        {category.name}
      </Text>
      <FlatList
        data={category.examples}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <Link
              href={`/templates/${category.slug}/${item}`}
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
