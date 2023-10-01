import { DefaultButtonExample } from "@/examples/components/button/default";
import { ButtonWithIconExample } from "@/examples/components/button/with-icon";
import { DestructiveButtonExample } from "@/examples/components/button/error";
import { SuccessButtonExample } from "@/examples/components/button/success";

const ButtonMeta = {
  title: "Components/Button",
};

export default ButtonMeta;

export const Default = {
  render: () => <DefaultButtonExample />,
};

export const WithIcon = {
  render: () => <ButtonWithIconExample />,
};

export const Success = {
  render: () => <SuccessButtonExample />,
};

export const Destructive = {
  render: () => <DestructiveButtonExample />,
};
