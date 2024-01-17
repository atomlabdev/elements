import RNPickerSelect, {
  PickerSelectProps,
  PickerStyle,
} from "react-native-picker-select";
import tailwind from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform } from "react-native";

/**
 * React Native select component built with Tailwind CSS
 */
export const Select = ({ style, Icon, ...props }: PickerSelectProps) => {
  const defaultInputStyle = tailwind`w-full flex flex-row items-center bg-white border border-neutral-200 h-12 pl-4 pr-12 rounded-lg`;

  const combinedStyle: PickerStyle = {
    inputIOS: defaultInputStyle,
    inputAndroid: defaultInputStyle,
    inputWeb: tailwind`w-full h-12 rounded-lg`, // TODO: improve web styling
    iconContainer: tailwind`flex items-center justify-center h-12 w-12`,
    ...style,
  };

  return (
    <RNPickerSelect
      {...props}
      style={combinedStyle}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
        if (Platform.OS === "web") return null;

        if (Icon) {
          return Icon();
        }

        return (
          <Ionicons
            name="chevron-down"
            size={18}
            color={tailwind.color("text-neutral-950")}
          />
        );
      }}
    />
  );
};
