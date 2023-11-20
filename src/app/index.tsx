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
    <View style={tailwind`p-8 flex flex-row justify-around`}>
      <Link style={tailwind`text-white font-bold`} href="/components">
        Components
      </Link>
      <Link style={tailwind`text-white font-bold`} href="/templates">
        Templates
      </Link>
    </View>
  );
}
