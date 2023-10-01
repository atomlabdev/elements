import { CircleImageExample } from "@/examples/components/image/circle";
import { DefaultImageExample } from "@/examples/components/image/default";
import { RoundedImageExample } from "@/examples/components/image/rounded";
import { LargerImageExample } from "@/examples/components/image/sized";

const ImageMeta = {
  title: "Components/Image",
};

export default ImageMeta;

export const Default = {
  render: (args) => {
    return <DefaultImageExample />;
  },
};

export const Rounded = {
  render: (args) => {
    return <RoundedImageExample />;
  },
};

export const Circle = {
  render: (args) => {
    return <CircleImageExample />;
  },
};

export const Larger = {
  render: (args) => {
    return <LargerImageExample />;
  },
};
