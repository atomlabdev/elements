/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./.storybook/stories",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./.storybook/stories/Alert.stories.tsx": require("./stories/Alert.stories.tsx"),
    "./.storybook/stories/Avatar.stories.tsx": require("./stories/Avatar.stories.tsx"),
    "./.storybook/stories/Badge.stories.tsx": require("./stories/Badge.stories.tsx"),
    "./.storybook/stories/Box.stories.tsx": require("./stories/Box.stories.tsx"),
    "./.storybook/stories/Button.stories.tsx": require("./stories/Button.stories.tsx"),
    "./.storybook/stories/Card.stories.tsx": require("./stories/Card.stories.tsx"),
    "./.storybook/stories/Image.stories.tsx": require("./stories/Image.stories.tsx"),
    "./.storybook/stories/List.stories.tsx": require("./stories/List.stories.tsx"),
    "./.storybook/stories/Login.stories.tsx": require("./stories/Login.stories.tsx"),
    "./.storybook/stories/PasswordReset.stories.tsx": require("./stories/PasswordReset.stories.tsx"),
    "./.storybook/stories/ProgressBar.stories.tsx": require("./stories/ProgressBar.stories.tsx"),
    "./.storybook/stories/Signup.stories.tsx": require("./stories/Signup.stories.tsx"),
    "./.storybook/stories/UserProfile.stories.tsx": require("./stories/UserProfile.stories.tsx"),
  };
};

configure(getStories, module, false);
