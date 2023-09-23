import tw, { useDeviceContext } from "twrnc";
import StorybookUIRoot from "./.storybook";
import "./styles.css";

export default function App() {
  useDeviceContext(tw);
  return <StorybookUIRoot />;
}
