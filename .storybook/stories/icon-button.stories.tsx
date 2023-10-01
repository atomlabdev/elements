import { DefaultIconButtonExample } from "@/examples/components/icon-button/default";
import { DestructiveIconButtonExample } from "@/examples/components/icon-button/destructive";
import { SuccessIconButtonExample } from "@/examples/components/icon-button/success";

const ButtonMeta = {
  title: "Components/IconButton",
};

export default ButtonMeta;

export const Default = {
  render: () => <DefaultIconButtonExample />,
};

export const Success = {
  render: () => <SuccessIconButtonExample />,
};

export const Destructive = {
  render: () => <DestructiveIconButtonExample />,
};
