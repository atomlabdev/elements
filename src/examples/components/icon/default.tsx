import { Icon } from "@/components/icon";
import tailwind from "twrnc";

export const IconExample = () => {
  return (
    <Icon
      type="Ionicons"
      name="information-circle-outline"
      size={24}
      color={tailwind.color("text-white")}
    />
  );
};
