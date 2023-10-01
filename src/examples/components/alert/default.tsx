import { Alert } from "@/components/alert";
import Ionicons from "@expo/vector-icons/Ionicons";

export const DefaultAlert = () => {
  return (
    <Alert
      title="Default Alert"
      description="This is an alert"
      icon={(color, size) => (
        <Ionicons name="information-circle-outline" color={color} size={size} />
      )}
    />
  );
};
