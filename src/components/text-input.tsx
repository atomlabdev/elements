import { TextInput as DefaultTextInput, TextInputProps } from "react-native";
import tailwind from "twrnc";

export const TextInput = (props: TextInputProps) => {
  return (
    <DefaultTextInput
      {...props}
      style={[
        tailwind`w-full bg-white border border-gray-200 rounded-md h-12 px-4`,
        props.style,
      ]}
      placeholderTextColor={tailwind.color("text-gray-950")}
    />
  );
};
