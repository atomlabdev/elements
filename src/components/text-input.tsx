import { useState } from "react";
import { TextInput as DefaultTextInput, TextInputProps } from "react-native";
import tailwind from "twrnc";

/**
 * React Native text input component built with Tailwind CSS
 */
export const TextInput = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = () => {
    setIsFocused(false);
  };

  return (
    <DefaultTextInput
      {...props}
      onFocus={handleFocus}
      onEndEditing={handleEndEditing}
      style={[
        tailwind`w-full bg-white border border-gray-200 rounded-md h-12 px-4`,
        isFocused ? tailwind`border-blue-400` : {},
        props.style,
      ]}
      placeholderTextColor={tailwind.color("text-gray-950")}
    />
  );
};
