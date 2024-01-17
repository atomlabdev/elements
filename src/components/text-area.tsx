import { TextInputProps } from "react-native";
import tailwind from "twrnc";
import { TextInput } from "@/components/text-input";

export interface TextAreaProps extends TextInputProps {
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
  const sizes = {
    sm: tailwind`h-24`,
    md: tailwind`h-36`,
    lg: tailwind`h-48`,
  };

  return (
    <TextInput
      {...props}
      multiline
      style={[tailwind`py-4`, sizes[size], style]}
    />
  );
};
