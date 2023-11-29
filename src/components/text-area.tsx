import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import tailwind from "twrnc";

interface TextAreaProps extends TextInputProps {
  size?: "sm" | "md" | "lg";
}

/**
 * React Native text area component built with Tailwind CSS
 */
export const TextArea = ({
  style,
  size = "md",
  placeholderTextColor,
  ...props
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const sizes = {
    sm: tailwind`h-24`,
    md: tailwind`h-36`,
    lg: tailwind`h-48`,
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      {...props}
      multiline
      onFocus={handleFocus}
      onEndEditing={handleEndEditing}
      placeholderTextColor={
        placeholderTextColor || tailwind.color("text-gray-500")
      }
      style={[
        tailwind`w-full rounded-md bg-white border border-gray-200 p-4 text-gray-950 text-base leading-6`,
        sizes[size],
        isFocused ? tailwind`border-blue-400` : {},
        style,
      ]}
    />
  );
};
