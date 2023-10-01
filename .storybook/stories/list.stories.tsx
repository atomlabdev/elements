import { BulletListExample } from "@/examples/components/list/bullet";
import { HyphenatedListExample } from "@/examples/components/list/hyphenated";
import { SquaredListExample } from "@/examples/components/list/squared";

const ListMeta = {
  title: "Components/List",
};

export default ListMeta;

export const Bullet = {
  render: (args) => {
    return <BulletListExample />;
  },
};

export const Hyphenated = {
  render: (args) => {
    return <HyphenatedListExample />;
  },
};

export const Squared = {
  render: (args) => {
    return <SquaredListExample />;
  },
};
