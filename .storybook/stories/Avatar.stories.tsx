import { Avatar } from "../../src/components/avatar";

const AvatarMeta = {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    source: {
      uri: "https://images.unsplash.com/photo-1676824452052-b030b9026b5b",
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "radio",
      options: ["default", "rounded"],
    },
  },
};

export default AvatarMeta;

export const Default = {};

export const Rounded = {
  args: {
    variant: "rounded",
  },
};
