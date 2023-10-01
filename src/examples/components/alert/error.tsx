import { Alert } from "@/components/alert";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ErrorAlert = () => {
  return (
    <Alert
      variant="error"
      title="Error Alert"
      description="This is an alert"
      icon={(color, size) => (
        <Ionicons name="alert-circle-outline" color={color} size={size} />
      )}
    />
  );
};
