import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tailwind from "twrnc";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <View style={tailwind`flex-1 items-center justify-center bg-black`}>
      {error ? (
        <View
          style={tailwind`absolute top-8 w-full bg-red-400 mx-8 max-w-sm p-4 rounded-md`}
        >
          <Text style={tailwind`text-white font-bold`}>
            Email addresses don't match
          </Text>
        </View>
      ) : null}
      <View style={tailwind`p-8 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-white`}>
          Sign up
        </Text>

        <TextInput
          style={tailwind`w-full bg-white rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Enter email address"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={tailwind`w-full bg-white rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Confirm email address"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={tailwind`w-full bg-white rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Enter password"
          secureTextEntry={!showPassword}
        />

        <TextInput
          style={tailwind`w-full bg-white rounded-md h-12 px-4`}
          placeholderTextColor="#000"
          placeholder="Confirm password"
          secureTextEntry={!showPassword}
        />

        <View style={tailwind`flex-row items-center my-8`}>
          <Pressable
            style={tailwind`flex items-center justify-center bg-white h-6 w-6 rounded-sm mr-3`}
          >
            <View style={tailwind`bg-green-400 h-4 w-4 rounded-sm`} />
          </Pressable>
          <Text style={tailwind`text-white`}>
            I've read and agree to the terms and conditions and the privacy
            policy
          </Text>
        </View>

        <Pressable
          style={tailwind`h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6`}
        >
          <View style={tailwind`flex-1 flex items-center`}>
            <Text style={tailwind`text-white text-base font-medium`}>
              Sign up
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
