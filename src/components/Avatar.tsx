import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
} from "react-native";
import tailwind from "twrnc";

interface AvatarProps extends ImageProps {
  source: ImageSourcePropType;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "rounded";
  imageStyle?: ImageStyle;
}

export const Avatar = ({
  source,
  size = "sm",
  variant = "default",
  imageStyle,
}: AvatarProps) => {
  const variants = {
    default: tailwind`rounded-full`,
    rounded: tailwind`rounded-lg`,
  };

  const sizes = {
    xs: tailwind`w-12 h-12`,
    sm: tailwind`w-16 h-16`,
    md: tailwind`w-24 h-24`,
    lg: tailwind`w-36 h-36`,
    xl: tailwind`w-48 h-48`,
  };

  return (
    <Image
      style={[variants[variant], sizes[size], imageStyle]}
      source={source}
    />
  );
};
