import { DefaultBadge } from "@/examples/components/badge/default-badge";
import { DestructiveBadge } from "@/examples/components/badge/destructive-badge";
import { SuccessBadge } from "@/examples/components/badge/success-badge";

const BoxMeta = {
  title: "Components/Badge",
};

export default BoxMeta;

export const Default = {
  render: () => {
    return <DefaultBadge />;
  },
};

export const Success = {
  render: () => {
    return <SuccessBadge />;
  },
};

export const Destructive = {
  render: () => {
    return <DestructiveBadge />;
  },
};
