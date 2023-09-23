import { BulletList } from "@/components/list";

const items = [
  { key: "Tokyo" },
  { key: "Delhi" },
  { key: "Shanghai" },
  { key: "Sao Paolo" },
  { key: "Mexico City" },
  { key: "Cairo" },
  { key: "Dhaka" },
  { key: "Mumbai" },
  { key: "Beijing" },
  { key: "Osaka" },
];

export const BulletListExample = () => {
  return <BulletList items={items} />;
};
