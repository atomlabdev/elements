import { DefaultBadgeExample } from "@/examples/components/badge/default";
import { SuccessBadgeExample } from "@/examples/components/badge/success";
import { DestructiveBadgeExample } from "@/examples/components/badge/destructive";

const BoxMeta = {
  title: "Components/Badge",
};

export default BoxMeta;

export const Default = {
  render: () => <DefaultBadgeExample />,
};

export const Success = {
  render: () => <SuccessBadgeExample />,
};

export const Destructive = {
  render: () => <DestructiveBadgeExample />,
};
