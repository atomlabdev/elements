import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const UserProfile = () => {
  return (
    <SafeAreaView className="w-full flex-1 bg-black">
      <View className="flex-1 items-center justify-center gap-8">
        <Image
          source={{ uri: "https://source.unsplash.com/random" }}
          className="w-24 h-24 rounded-full"
          resizeMode="cover"
        />
        <View className="gap-2 items-center">
          <Text className="text-white text-3xl font-bold">Joe Bloggs</Text>
          <Text className="text-white text-lg">joe@bloggs.com</Text>
        </View>
      </View>
      <View className="flex-1 justify-center gap-8">
        <Pressable className="flex-row items-center gap-2 px-8">
          <Ionicons name="settings-outline" size={24} color="#fff" />
          <Text className="text-white text-lg">Settings</Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-2 px-8">
          <Ionicons name="help-buoy-outline" size={24} color="#fff" />
          <Text className="text-white text-lg">Help</Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-2 px-8">
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text className="text-white text-lg">Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
