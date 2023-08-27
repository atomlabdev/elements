import tw, { useDeviceContext } from "twrnc";
import StorybookUIRoot from "./.storybook";

export default function App() {
  useDeviceContext(tw);
  return <StorybookUIRoot />;
}
