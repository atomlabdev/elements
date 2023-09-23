import { DefaultBox } from "@/examples/components/box/default-box";
import { DestructiveBox } from "@/examples/components/box/destructive-box";
import { SuccessBox } from "@/examples/components/box/success-box";

const BoxMeta = {
  title: "Components/Box",
};

export default BoxMeta;

export const Default = {
  render: () => {
    return <DefaultBox />;
  },
};

export const Success = {
  render: () => {
    return <SuccessBox />;
  },
};

export const Destructive = {
  render: () => {
    return <DestructiveBox />;
  },
};
