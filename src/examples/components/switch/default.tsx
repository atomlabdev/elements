import { useState } from "react";
import { Switch } from "@/components/switch";

export const DefaultSwitchExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return <Switch value={isSelected} onValueChange={setIsSelected} />;
};
