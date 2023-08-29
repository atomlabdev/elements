import { Image, ImageSourcePropType } from "react-native";
import tailwind from "twrnc";

type AvatarSize = "sm" | "md" | "lg";
type AvatarType = "circle" | "rounded";

type AvatarProps = {
  source: ImageSourcePropType;
  size?: AvatarSize;
  type?: AvatarType;
};

export const Avatar = ({ source, size, type }: AvatarProps) => {
  const getSize = () => {
    if (size === "lg") return `w-96 h-96`;
    if (size === "md") return "w-64 h-64";

    return "w-32 h-32";
  };

  const getType = () => {
    if (type === "rounded") return "rounded-lg";

    return "rounded-full";
  };

  return <Image style={tailwind`${getSize()} ${getType()}`} source={source} />;
};
