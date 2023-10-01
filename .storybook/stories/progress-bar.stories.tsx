import { DefaultProgressBarExample } from "@/examples/components/progress-bar/default";
import { DestructiveProgressBarExample } from "@/examples/components/progress-bar/destructive";
import { SuccessProgressBarExample } from "@/examples/components/progress-bar/success";
import { WarningProgressBarExample } from "@/examples/components/progress-bar/warning";

const ProgressBarMeta = {
  title: "Components/ProgressBar",
};

export default ProgressBarMeta;

export const Default = {
  render: (args) => <DefaultProgressBarExample />,
};

export const Success = {
  render: (args) => <SuccessProgressBarExample />,
};

export const Destructive = {
  render: (args) => <DestructiveProgressBarExample />,
};

export const Warning = {
  render: (args) => <WarningProgressBarExample />,
};
