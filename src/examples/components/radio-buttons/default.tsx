import { useState } from "react";
import { RadioButtons } from "@/components/radio-buttons";

export const RadioButtonsExample = () => {
  const [selectedItem, setSelectedItem] = useState("osaka");

  const handleSelect = (itemValue: string) => {
    setSelectedItem(itemValue);
  };

  return (
    <RadioButtons
      activeItem={selectedItem}
      onSelectItem={handleSelect}
      options={[
        {
          label: "Osaka",
          value: "osaka",
        },
        {
          label: "Rio De Janeiro",
          value: "rio-de-janeiro",
        },
        {
          label: "London",
          value: "london",
        },
      ]}
    />
  );
};
