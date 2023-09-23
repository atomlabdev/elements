import { Image, ImageProps } from "react-native";

export const SquareImage = ({ source, style, ...props }: ImageProps) => {
  return <Image source={source} className={`w-64 h-64 ${style}`} {...props} />;
};

export const RoundedImage = ({ source, style, ...props }: ImageProps) => {
  return (
    <Image
      source={source}
      className={`w-64 h-64 rounded-lg ${style}`}
      {...props}
    />
  );
};

export const CircleImage = ({ source, style, ...props }: ImageProps) => {
  return (
    <Image
      source={source}
      className={`w-64 h-64 rounded-full ${style}`}
      {...props}
    />
  );
};
