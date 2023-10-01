import { Image } from "@/components/image";

export const CircleImageExample = () => {
  return (
    <Image
      source={{ uri: "https://source.unsplash.com/random" }}
      variant="circle"
    />
  );
};
