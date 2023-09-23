import { Button } from "@/components/button";

export const SuccessButton = () => {
  const handlePress = () => {
    console.log("button pressed");
  };

  return (
    <Button variant="success" onPress={handlePress} text="Success Button" />
  );
};
