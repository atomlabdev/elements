import { View, Text, Pressable } from "react-native";
import tailwind from "twrnc";
import { TextInput } from "@/components/text-input";
import { Button } from "@/components/button";

export const Login = () => {
  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}
    >
      <View style={tailwind`px-4 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Login
        </Text>

        <View style={tailwind`flex flex-col gap-4`}>
          <TextInput placeholder="Enter email address" />
          <TextInput placeholder="Enter password" />
        </View>

        <View style={tailwind`flex flex-row justify-between items-center my-8`}>
          <View style={tailwind`flex-row items-center`}>
            <Pressable
              style={tailwind`bg-gray-50 h-6 w-6 rounded-sm mr-2`}
            ></Pressable>
            <Text style={tailwind`text-gray-50`}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={tailwind`text-gray-50 font-bold`}>Reset password</Text>
          </Pressable>
        </View>

        <Button text="Login" variant="success" />
      </View>
    </View>
  );
};
