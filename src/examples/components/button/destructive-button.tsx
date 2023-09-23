import { Button } from "@/components/button";

export const DestructiveButton = () => {
  const handlePress = () => {
    console.log("button pressed");
  };

  return (
    <Button
      variant="destructive"
      onPress={handlePress}
      text="Destructive Button"
    />
  );
};
