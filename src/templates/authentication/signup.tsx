import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <View className="flex-1 items-center justify-center bg-black">
      {error ? (
        <View className="absolute top-8 w-full bg-red-400 mx-8 max-w-sm p-4 rounded-md">
          <Text className="text-white font-bold">
            Email addresses don't match
          </Text>
        </View>
      ) : null}
      <View className="p-8 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-white">Sign up</Text>

        <View>
          <TextInput
            className="w-full bg-white rounded-md h-12 px-4 mb-4"
            placeholderTextColor="#000"
            placeholder="Enter email address"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            className="w-full bg-white rounded-md h-12 px-4 mb-4"
            placeholderTextColor="#000"
            placeholder="Confirm email address"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            className="w-full bg-white rounded-md h-12 px-4 mb-4"
            placeholderTextColor="#000"
            placeholder="Enter password"
            secureTextEntry={!showPassword}
          />

          <TextInput
            className="w-full bg-white rounded-md h-12 px-4"
            placeholderTextColor="#000"
            placeholder="Confirm password"
            secureTextEntry={!showPassword}
          />
        </View>

        <View className="flex-row items-center my-8">
          <Pressable className="flex items-center justify-center bg-white h-6 w-6 rounded-sm mr-3">
            <View className="bg-green-400 h-4 w-4 rounded-sm" />
          </Pressable>
          <Text className="text-white">
            I've read and agree to the terms and conditions and the privacy
            policy
          </Text>
        </View>

        <Pressable className="h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6">
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">Sign up</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
