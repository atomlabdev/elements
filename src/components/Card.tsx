import { View, Text, Image, ImageSourcePropType } from "react-native";
import tailwind from "twrnc";

type CardImageProps = {
  source: ImageSourcePropType;
};

type CardContentProps = {
  children: React.ReactNode | React.ReactNode[];
};

type CardTitleProps = {
  title: string;
};

type CardProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const CardImage = ({ source }: CardImageProps) => {
  return (
    <Image
      source={source}
      style={tailwind`w-full h-64 rounded-t-xl`}
      resizeMode="cover"
    />
  );
};

export const CardContent = ({ children }: CardContentProps) => {
  return <View style={tailwind`p-6`}>{children}</View>;
};

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <Text style={tailwind`text-slate-900 text-lg font-bold`}>{title}</Text>
  );
};

export const Card = ({ children }: CardProps) => {
  return (
    <View style={tailwind`bg-white rounded-xl w-full max-w-xs`}>
      {children}
    </View>
  );
};
