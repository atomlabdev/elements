import { Button } from "@/components/button";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ButtonWithIconExample = () => {
  return (
    <Button
      text="With Icon"
      icon={(style) => <Ionicons name="add-circle" style={style} />}
    />
  );
};
