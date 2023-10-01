import { DefaultAvatarExample } from "@/examples/components/avatar/default";
import { RoundedAvatarExample } from "@/examples/components/avatar/rounded";

const AvatarMeta = {
  title: "Components/Avatar",
};

export default AvatarMeta;

export const Default = {
  render: () => <DefaultAvatarExample />,
};

export const Rounded = {
  render: () => <RoundedAvatarExample />,
};
