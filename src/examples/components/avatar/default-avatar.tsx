import { Avatar } from "@/components/avatar";
import { View } from "react-native";

export const DefaultAvatar = () => {
  return (
    <Avatar
      source={{
        uri: "https://images.unsplash.com/photo-1676824452052-b030b9026b5b",
      }}
    />
  );
};
