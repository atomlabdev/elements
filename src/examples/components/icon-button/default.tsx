import { IconButton } from "@/components/icon-button";
import Ionicons from "@expo/vector-icons/Ionicons";

export const DefaultIconButtonExample = () => {
  return (
    <IconButton
      icon={(style) => <Ionicons name="caret-up-outline" style={style} />}
    />
  );
};
