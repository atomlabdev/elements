import { Button } from "@/components/button";

export const ButtonWithIconExample = () => {
  return (
    <Button
      text="With Icon"
      icon={{
        name: "add-circle",
        type: "Ionicons",
      }}
    />
  );
};
