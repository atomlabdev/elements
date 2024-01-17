import { Pressable, View, Text, ViewStyle, TextStyle } from "react-native";
import tailwind from "twrnc";

type RadioButtonsItem = {
  key: string;
  label: string;
  value: string;
};

type RadioButtonsProps = {
  options: RadioButtonsItem[];
  activeItem: string;
  onSelectItem: (selectedItem: string) => void;
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  textStyle?: TextStyle;
};

/**
 * React Native radio button component built with Tailwind CSS
 */
export const RadioButtons = ({
  options,
  activeItem,
  onSelectItem,
  containerStyle,
  itemStyle,
  textStyle,
}: RadioButtonsProps) => {
  return (
    <View style={[tailwind`flex flex-col gap-4`, containerStyle]}>
      {options.map((option) => {
        const isActive = activeItem === option.value;

        return (
          <Pressable
            key={option.key}
            onPress={() => onSelectItem(option.value)}
            style={[tailwind`flex flex-row items-center gap-3`, itemStyle]}
          >
            <View
              style={tailwind`flex items-center justify-center border rounded-full w-6 h-6 ${
                isActive ? `border-blue-400` : ` border-neutral-200`
              }`}
            >
              {isActive ? (
                <View style={tailwind`bg-blue-400 rounded-full w-4 h-4`} />
              ) : null}
            </View>
            <Text
              style={[
                tailwind`text-neutral-950 dark:text-neutral-50`,
                textStyle,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
