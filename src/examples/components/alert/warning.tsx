import { Alert } from "@/components/alert";
import Ionicons from "@expo/vector-icons/Ionicons";

export const WarningAlert = () => {
  return (
    <Alert
      variant="warning"
      title="Warning Alert"
      description="This is an alert"
      icon={(color, size) => (
        <Ionicons name="warning-outline" color={color} size={size} />
      )}
    />
  );
};
