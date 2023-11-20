import { View, Text } from "react-native";
import tailwind from "twrnc";
import { TextInput } from "@/components/text-input";
import { Button } from "@/components/button";

export const PasswordReset = () => {
  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}
    >
      <View style={tailwind`px-4 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Reset Your Password
        </Text>

        <Text style={tailwind`text-gray-50 mb-8 text-base`}>
          Forgotten your account password? Enter your email address below and
          you'll recieve a link to create a new one.
        </Text>

        <TextInput style={tailwind`mb-4`} placeholder="Enter email address" />

        <Button text="Reset Password" variant="success" />
      </View>
    </View>
  );
};
