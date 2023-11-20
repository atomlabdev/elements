import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "twrnc";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={tailwind`p-8 flex-1 flex items-center justify-center`}>
      <View style={tailwind`w-full max-w-xl gap-12`}>
        <View style={tailwind`flex items-center`}>
          <Text style={tailwind`text-white font-bold text-5xl`}>Elements</Text>
        </View>
        <View style={tailwind`flex flex-row gap-8`}>
          <Link
            style={tailwind`flex-1 bg-gray-700 dark:bg-gray-100 h-12 px-4 flex justify-center items-center rounded-md`}
            href="/components"
          >
            <Text style={tailwind`text-white dark:text-gray-950 font-bold`}>
              Components
            </Text>
          </Link>
          <Link
            style={tailwind`flex-1 bg-gray-700 dark:bg-gray-100 h-12 px-4 flex justify-center items-center rounded-md`}
            href="/templates"
          >
            <Text style={tailwind`text-white dark:text-gray-950 font-bold`}>
              Templates
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
