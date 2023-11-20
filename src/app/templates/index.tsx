import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "twrnc";
import { Link } from "expo-router";
import templates from "@/data/templates";

export default function Page() {
  return (
    <View style={tailwind`p-8`}>
      <FlatList
        data={templates}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => {
          return (
            <Link href={`/templates/${item.slug}`} style={tailwind`mb-8`}>
              <Text style={tailwind`text-blue-700 dark:text-white font-bold`}>
                {item.name}
              </Text>
            </Link>
          );
        }}
      />
    </View>
  );
}
