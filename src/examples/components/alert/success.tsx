import { Alert } from "@/components/alert";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SuccessAlert = () => {
  return (
    <Alert
      variant="success"
      title="Success Alert"
      description="This is an alert"
      icon={(color, size) => (
        <Ionicons name="checkmark-circle-outline" color={color} size={size} />
      )}
    />
  );
};
