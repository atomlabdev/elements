import { TextInput } from "@/components/text-input";
import { useState } from "react";

export const DefaultTextInputExample = () => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder="Enter text here"
    />
  );
};
