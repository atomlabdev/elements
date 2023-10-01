import { IconButton } from "@/components/icon-button";
import Ionicons from "@expo/vector-icons/Ionicons";

export const DestructiveIconButtonExample = () => {
  return (
    <IconButton
      variant="destructive"
      icon={(style) => <Ionicons name="trash" style={style} />}
    />
  );
};
