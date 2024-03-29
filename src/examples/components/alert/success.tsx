import { Alert } from "@/components/alert";

export const SuccessAlert = () => {
  return (
    <Alert
      variant="success"
      title="Success Alert"
      description="This is an alert"
      icon={{
        name: "checkmark-circle-outline",
        type: "Ionicons",
      }}
    />
  );
};
