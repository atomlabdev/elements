import { TextArea } from "@/components/text-area";
import { useState } from "react";

export const TextAreaExample = () => {
  const [value, setValue] = useState("");
  return <TextArea value={value} onChangeText={setValue} />;
};
