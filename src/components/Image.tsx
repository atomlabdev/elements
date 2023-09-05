import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import tailwind from "twrnc";

type ImageProps = {
  source: ImageSourcePropType;
  style?: ImageStyle;
};

export const SquareImage = ({ source, style }: ImageProps) => {
  return <Image source={source} style={[tailwind`w-64 h-64`, style]} />;
};

export const RoundedImage = ({ source, style }: ImageProps) => {
  return (
    <Image source={source} style={[tailwind`w-64 h-64 rounded-lg`, style]} />
  );
};

export const CircleImage = ({ source, style }: ImageProps) => {
  return (
    <Image source={source} style={[tailwind`w-64 h-64 rounded-full`, style]} />
  );
};
