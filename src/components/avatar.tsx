import { Image, ImageProps } from "react-native";
import tailwind from "twrnc";

interface AvatarProps extends ImageProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "rounded";
}

export const Avatar = ({
  source,
  size = "sm",
  variant = "default",
  style,
  ...props
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
      style={[variants[variant], sizes[size], style]}
      source={source}
      {...props}
    />
  );
};
