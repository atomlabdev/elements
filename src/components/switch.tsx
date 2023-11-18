import {
  Switch as DefaultSwitch,
  View,
  SwitchProps as DefaultSwitchProps,
  ViewStyle,
} from "react-native";
import tailwind from "twrnc";

interface SwitchProps extends DefaultSwitchProps {
  label?: () => React.ReactNode;
  containerStyle?: ViewStyle;
}

/**
 * React Native switch component built with Tailwind CSS
 */
export const Switch = ({ label, containerStyle, ...props }: SwitchProps) => {
  return (
    <View style={[tailwind`flex flex-row items-center gap-4`, containerStyle]}>
      <DefaultSwitch {...props} />
      {label ? label() : null}
    </View>
  );
};
