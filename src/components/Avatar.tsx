import { Image, ImageProps } from "react-native";

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
    default: "rounded-full",
    rounded: "rounded-lg",
  };

  const sizes = {
    xs: "w-12 h-12",
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-36 h-36",
    xl: "w-48 h-48",
  };

  return (
    <Image
      className={`${variants[variant]} ${sizes[size]} ${style}`}
      source={source}
      {...props}
    />
  );
};
