import { Alert } from "@/components/alert";

export const WarningAlert = () => {
  return (
    <Alert
      variant="warning"
      title="Warning Alert"
      description="This is an alert"
      icon={{
        name: "warning-outline",
        type: "Ionicons",
      }}
    />
  );
};
