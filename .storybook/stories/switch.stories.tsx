import { DefaultSwitchExample } from "@/examples/components/switch/default";
import { StyledContainerSwitchExample } from "@/examples/components/switch/styled-container";
import { WithLabelSwitchExample } from "@/examples/components/switch/with-label";

const SwitchMeta = {
  title: "Components/Switch",
};

export default SwitchMeta;

export const Default = {
  render: () => <DefaultSwitchExample />,
};

export const WithLabel = {
  render: () => <WithLabelSwitchExample />,
};

export const StyledContainer = {
  render: () => <StyledContainerSwitchExample />,
};
