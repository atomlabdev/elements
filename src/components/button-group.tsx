import { View, Pressable, Text } from "react-native";
import tailwind from "twrnc";
import { Button, ButtonText } from "@/components/button";

type ButtonGroupItemPosition = "first" | "middle" | "last";

interface ButtonGroupItem {
  key: string;
  value: string;
  label: string;
}

interface ButtonGroupItemProps extends ButtonGroupItem {
  value: string;
  label: string;
  onSelect: (value: string) => void;
  position: ButtonGroupItemPosition;
  isSelected: boolean;
}

type ButtonGroupProps = {
  items: ButtonGroupItem[];
  selectedItem?: string;
  onSelect: (value: string) => void;
};

const ButtonGroupItem = ({
  value,
  label,
  onSelect,
  position = "middle",
  isSelected,
}: ButtonGroupItemProps) => {
  const positions = {
    first: tailwind`rounded-l-md`,
    middle: tailwind``,
    last: tailwind`rounded-r-md`,
  };

  const handleSelect = () => {
    onSelect(value);
  };

  return (
    <Button
      onPress={handleSelect}
      selected={isSelected}
      style={[tailwind`rounded-none`, positions[position]]}
    >
      <ButtonText>{label}</ButtonText>
    </Button>
  );
};

/**
 * React Native button group component built with Tailwind CSS
 */
export const ButtonGroup = ({
  items,
  selectedItem,
  onSelect,
}: ButtonGroupProps) => {
  const getPosition = (index: number): ButtonGroupItemPosition => {
    if (index === 0) return "first";
    if (index + 1 === items.length) return "last";
    return "middle";
  };

  return (
    <View style={tailwind`flex flex-row`}>
      {items.map((item, index) => (
        <ButtonGroupItem
          key={item.key}
          value={item.value}
          label={item.label}
          onSelect={onSelect}
          isSelected={selectedItem === item.value}
          position={getPosition(index)}
        />
      ))}
    </View>
  );
};
