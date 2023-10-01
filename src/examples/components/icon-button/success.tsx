import { IconButton } from "@/components/icon-button";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SuccessIconButtonExample = () => {
  return (
    <IconButton
      variant="success"
      icon={(style) => <Ionicons name="checkmark" style={style} />}
    />
  );
};
