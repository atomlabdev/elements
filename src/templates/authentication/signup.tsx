import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tailwind from "twrnc";
import { TextInput } from "@/components/text-input";
import { Button } from "@/components/button";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <View
      style={tailwind`w-full flex-1 items-center justify-center bg-gray-950`}
    >
      {error ? (
        <View
          style={tailwind`absolute top-8 w-full bg-red-400 mx-8 max-w-sm p-4 rounded-md`}
        >
          <Text style={tailwind`text-gray-50 font-bold`}>
            Email addresses don't match
          </Text>
        </View>
      ) : null}
      <View style={tailwind`px-8 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Sign up
        </Text>

        <View style={tailwind`flex flex-col gap-4`}>
          <TextInput
            placeholder="Enter email address"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Confirm email address"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
          />

          <TextInput
            placeholder="Confirm password"
            secureTextEntry={!showPassword}
          />
        </View>

        <View style={tailwind`flex-row items-center my-8`}>
          <Pressable
            style={tailwind`flex items-center justify-center bg-gray-50 h-6 w-6 rounded-sm mr-3`}
          >
            <View style={tailwind`bg-green-400 h-4 w-4 rounded-sm`} />
          </Pressable>
          <Text style={tailwind`text-gray-50`}>
            I've read and agree to the terms and conditions and the privacy
            policy
          </Text>
        </View>

        <Button text="Sign up" variant="success" />
      </View>
    </View>
  );
};
