import {
  View,
  Text,
  Image,
  ImageProps,
  ViewProps,
  TextProps,
} from "react-native";

export const CardImage = ({ source, style, ...props }: ImageProps) => {
  return (
    <Image
      source={source}
      className={`w-full h-64 rounded-t-xl ${style}`}
      resizeMode="cover"
      {...props}
    />
  );
};

export const CardContent = ({ children, style, ...props }: ViewProps) => {
  return (
    <View className={`p-6 ${style}`} {...props}>
      {children}
    </View>
  );
};

export const CardTitle = ({ children, style, ...props }: TextProps) => {
  return (
    <Text className={`text-slate-900 text-lg font-bold ${style}`} {...props}>
      {children}
    </Text>
  );
};

export const Card = ({ children, style, ...props }: ViewProps) => {
  return (
    <View className={`bg-white rounded-xl w-full max-w-xs ${style}`} {...props}>
      {children}
    </View>
  );
};
