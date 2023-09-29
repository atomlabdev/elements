import { Button } from "../../src/components/button";

const ButtonMeta = {
  title: "Components/Button",
  component: Button,
  args: {
    text: "Button",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "destructive"],
    },
  },
};

export default ButtonMeta;

export const Default = {};

export const Success = {
  args: {
    text: "Success",
    variant: "success",
  },
};

export const Destructive = {
  args: {
    text: "Destructive",
    variant: "destructive",
  },
};
