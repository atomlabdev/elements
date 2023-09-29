import { View, Text, TextInput, Pressable } from "react-native";
import tailwind from "twrnc";

export const Login = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center bg-gray-950`}>
      <View style={tailwind`p-8 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Login
        </Text>

        <TextInput
          style={tailwind`w-full bg-gray-50 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Enter email address"
        />

        <TextInput
          style={tailwind`w-full bg-gray-50 rounded-md h-12 px-4`}
          placeholderTextColor="#000"
          placeholder="Enter password"
        />

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

        <Pressable
          style={tailwind`h-12 border-2 border-gray-50 rounded-md flex flex-row justify-center items-center px-6`}
        >
          <View style={tailwind`flex-1 flex items-center`}>
            <Text style={tailwind`text-gray-50 text-base font-medium`}>
              Login
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
