import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

export type IconType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Fontisto"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial";

export type IconProps = {
  // todo: improve typing
  type: IconType;
  name: string;
  size?: number;
  color?: string;
};

/**
 * An easy to use wrapper around expo-vector-icons
 */
export const Icon = ({ type, name, size, color }: IconProps) => {
  if (type === "AntDesign") {
    return <AntDesign name={name as any} size={size} color={color} />;
  }

  if (type === "Entypo") {
    return <Entypo name={name as any} size={size} color={color} />;
  }

  if (type === "EvilIcons") {
    return <EvilIcons name={name as any} size={size} color={color} />;
  }

  if (type === "Feather") {
    return <Feather name={name as any} size={size} color={color} />;
  }

  if (type === "FontAwesome") {
    return <FontAwesome name={name as any} size={size} color={color} />;
  }

  if (type === "FontAwesome5") {
    return <FontAwesome5 name={name as any} size={size} color={color} />;
  }

  if (type === "Fontisto") {
    return <Fontisto name={name as any} size={size} color={color} />;
  }

  if (type === "Foundation") {
    return <Foundation name={name as any} size={size} color={color} />;
  }

  if (type === "Ionicons") {
    return <Ionicons name={name as any} size={size} color={color} />;
  }

  if (type === "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons name={name as any} size={size} color={color} />
    );
  }

  if (type === "MaterialIcons") {
    return <MaterialIcons name={name as any} size={size} color={color} />;
  }

  if (type === "Octicons") {
    return <Octicons name={name as any} size={size} color={color} />;
  }

  if (type === "SimpleLineIcons") {
    return <SimpleLineIcons name={name as any} size={size} color={color} />;
  }

  if (type === "Zocial") {
    return <Zocial name={name as any} size={size} color={color} />;
  }

  return null;
};
