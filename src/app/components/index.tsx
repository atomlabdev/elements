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
      <FlatList
        data={components}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => {
          return (
            <Link href={`/components/${item.slug}`} style={tailwind`mb-8`}>
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
