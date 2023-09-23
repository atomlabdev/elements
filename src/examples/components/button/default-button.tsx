import { Button } from "@/components/button";

export const DefaultButton = () => {
  const handlePress = () => {
    console.log("button pressed");
  };

  return <Button onPress={handlePress} text="Default Button" />;
};
