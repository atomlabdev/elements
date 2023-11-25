import { useState } from "react";
import { ButtonGroup } from "@/components/button-group";

export const ButtonGroupExample = () => {
  const [selectedItem, setSelectedItem] = useState("one");

  const items = [
    {
      key: "one",
      value: "one",
      label: "One",
    },
    {
      key: "two",
      value: "two",
      label: "Two",
    },
    {
      key: "three",
      value: "three",
      label: "Three",
    },
    {
      key: "four",
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
