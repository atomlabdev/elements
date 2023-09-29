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
      source={source}
      style={[tailwind`w-full h-64 rounded-t-xl`, style]}
      resizeMode="cover"
      {...props}
    />
  );
};

export const CardContent = ({ children, style, ...props }: ViewProps) => {
  return (
    <View style={[tailwind`p-6`, style]} {...props}>
      {children}
    </View>
  );
};

export const CardTitle = ({ children, style, ...props }: TextProps) => {
  return (
    <Text style={[tailwind`text-gray-900 text-lg font-bold`, style]} {...props}>
      {children}
    </Text>
  );
};

export const Card = ({ children, style, ...props }: ViewProps) => {
  return (
    <View
      style={[tailwind`bg-gray-50 rounded-xl w-full max-w-xs`, style]}
      {...props}
    >
      {children}
    </View>
  );
};
