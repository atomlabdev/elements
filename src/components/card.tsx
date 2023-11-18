import {
  View,
  Text,
  Image,
  ImageProps,
  ViewProps,
  TextProps,
} from "react-native";
import tailwind from "twrnc";

export const CardImage = ({ source, style, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      source={source}
      style={[tailwind`w-full h-64 rounded-t-xl`, style]}
      resizeMode="cover"
    />
  );
};

export const CardContent = ({ children, style, ...props }: ViewProps) => {
  return (
    <View {...props} style={[tailwind`p-6`, style]}>
      {children}
    </View>
  );
};

export const CardTitle = ({ children, style, ...props }: TextProps) => {
  return (
    <Text {...props} style={[tailwind`text-gray-900 text-lg font-bold`, style]}>
      {children}
    </Text>
  );
};

/**
 * React Native card component built with Tailwind CSS
 */
export const Card = ({ children, style, ...props }: ViewProps) => {
  return (
    <View
      {...props}
      style={[tailwind`bg-gray-50 rounded-xl w-full max-w-xs`, style]}
    >
      {children}
    </View>
  );
};
