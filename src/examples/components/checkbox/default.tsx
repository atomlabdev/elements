import { Checkbox } from "@/components/checkbox";
import { useState } from "react";

export const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);
  return <Checkbox checked={isChecked} onChange={setIsChecked} />;
};
