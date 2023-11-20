import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "twrnc";
import { Link } from "expo-router";
import components from "@/data/components";

export default function Page() {
  return (
    <View style={tailwind`p-8`}>
      <Text
        style={tailwind`text-lg text-gray-950 dark:text-white font-bold mb-8`}
      >
        Components
      </Text>
      <FlatList
        data={components}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => {
          return (
            <Link
              href={`/components/${item.slug}`}
              style={tailwind`mb-8 bg-gray-700 dark:bg-gray-100 h-12 px-4 flex items-center rounded-md`}
            >
              <Text style={tailwind`text-white dark:text-gray-950 font-bold`}>
                {item.name}
              </Text>
            </Link>
          );
        }}
      />
    </View>
  );
}
