import { View, Text, TextInput, Pressable } from "react-native";

export const Login = () => {
  return (
    <View className="w-full flex-1 items-center justify-center bg-black">
      <View className="p-8 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-white">Login</Text>

        <View>
          <TextInput
            className="w-full bg-white rounded-md h-12 px-4 mb-4"
            placeholderTextColor="#000"
            placeholder="Enter email address"
          />

          <TextInput
            className="w-full bg-white rounded-md h-12 px-4"
            placeholderTextColor="#000"
            placeholder="Enter password"
          />
        </View>

        <View className="flex flex-row justify-between items-center my-8">
          <View className="flex-row items-center">
            <Pressable className="bg-white h-6 w-6 rounded-sm mr-2"></Pressable>
            <Text className="text-white">Remember me</Text>
          </View>
          <Pressable>
            <Text className="text-white font-bold">Reset password</Text>
          </Pressable>
        </View>

        <Pressable className="h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6">
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">Login</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
