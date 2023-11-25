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
          key: "osaka",
          label: "Osaka",
          value: "osaka",
        },
        {
          key: "rio-de-janeiro",
          label: "Rio De Janeiro",
          value: "rio-de-janeiro",
        },
        {
          key: "london",
          label: "London",
          value: "london",
        },
      ]}
    />
  );
};
