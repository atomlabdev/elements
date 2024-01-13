import { Alert } from "@/components/alert";

export const DefaultAlert = () => {
  return (
    <Alert
      title="This is an alert"
      description="It contains information for the user"
      icon={{
        name: "alert-circle-outline",
        type: "Ionicons",
      }}
    />
  );
};
