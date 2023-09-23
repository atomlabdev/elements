import { DefaultButton } from "@/examples/components/button/default-button";
import { DestructiveButton } from "@/examples/components/button/destructive-button";
import { SuccessButton } from "@/examples/components/button/success-button";

const ButtonMeta = {
  title: "Components/Button",
  component: DefaultButton,
};

export default ButtonMeta;

export const Default = {
  render: () => {
    return <DefaultButton />;
  },
};

export const Success = {
  render: () => {
    return <SuccessButton />;
  },
};

export const Destructive = {
  render: () => {
    return <DestructiveButton />;
  },
};
