import React from "react";
import { DefaultAvatar } from "@/examples/components/avatar/default-avatar";
import { RoundedAvatar } from "@/examples/components/avatar/rounded-avatar";

const AvatarMeta = {
  title: "Components/Avatar",
};

export default AvatarMeta;

export const Default = {
  render: () => {
    return <DefaultAvatar />;
  },
};

export const Rounded = {
  render: () => {
    return <RoundedAvatar />;
  },
};
