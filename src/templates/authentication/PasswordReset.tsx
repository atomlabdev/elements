import { View, Text, TextInput, Pressable } from "react-native";
import tailwind from "twrnc";

export const PasswordReset = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center bg-gray-950`}>
      <View style={tailwind`p-8 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Reset Your Password
        </Text>

        <Text style={tailwind`text-gray-50 mb-8 text-base`}>
          Forgotten your account password? Enter your email address below and
          you'll recieve a link to create a new one.
        </Text>

        <TextInput
          style={tailwind`w-full bg-gray-50 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Enter email address"
        />

        <Pressable
          style={tailwind`h-12 border-2 border-gray-50 rounded-md flex flex-row justify-center items-center px-6`}
        >
          <View style={tailwind`flex-1 flex items-center`}>
            <Text style={tailwind`text-gray-50 text-base font-medium`}>
              Reset Password
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
