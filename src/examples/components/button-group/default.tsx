import { useState } from "react";
import { ButtonGroup } from "@/components/button-group";

export const ButtonGroupExample = () => {
  const [selectedItem, setSelectedItem] = useState("one");

  const items = [
    {
      value: "one",
      label: "One",
    },
    {
      value: "two",
      label: "Two",
    },
    {
      value: "three",
      label: "Three",
    },
    {
      value: "four",
      label: "Four",
    },
  ];

  return (
    <ButtonGroup
      items={items}
      selectedItem={selectedItem}
      onSelect={(newSelectedItem) => setSelectedItem(newSelectedItem)}
    />
  );
};
