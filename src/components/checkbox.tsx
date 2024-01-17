import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tailwind from "twrnc";

type CheckboxProps = {
  onChange: (newValue: boolean) => void;
  checked: boolean;
};

/**
 * React Native checkbox component built with Tailwind CSS
 */
export const Checkbox = ({ onChange, checked }: CheckboxProps) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <Pressable
      style={tailwind`flex items-center justify-center w-8 h-8 bg-neutral-950 dark:bg-neutral-50 rounded-md`}
      onPress={handleToggle}
      role="checkbox"
    >
      {checked ? (
        <Ionicons
          name="checkmark"
          style={tailwind`text-neutral-50 dark:text-neutral-950 text-2xl`}
        />
      ) : null}
    </Pressable>
  );
};
