import { View, Text, TextInput, Pressable } from "react-native";

export const PasswordReset = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="p-8 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-white">
          Reset Your Password
        </Text>

        <Text className="text-white mb-8 text-base">
          Forgotten your account password? Enter your email address below and
          you'll recieve a link to create a new one.
        </Text>

        <View>
          <TextInput
            className="w-full bg-white rounded-md h-12 px-4 mb-4"
            placeholderTextColor="#000"
            placeholder="Enter email address"
          />
        </View>

        <Pressable className="h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6">
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">
              Reset Password
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
