import { Alert } from "@/components/alert";

export const ErrorAlert = () => {
  return (
    <Alert
      variant="error"
      title="Error Alert"
      description="This is an alert"
      icon={{
        name: "alert-circle-outline",
        type: "Ionicons",
      }}
    />
  );
};
