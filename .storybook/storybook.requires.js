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
    "./.storybook/stories/alert.stories.tsx": require("./stories/alert.stories.tsx"),
    "./.storybook/stories/avatar.stories.tsx": require("./stories/avatar.stories.tsx"),
    "./.storybook/stories/badge.stories.tsx": require("./stories/badge.stories.tsx"),
    "./.storybook/stories/box.stories.tsx": require("./stories/box.stories.tsx"),
    "./.storybook/stories/button-group.stories.tsx": require("./stories/button-group.stories.tsx"),
    "./.storybook/stories/button.stories.tsx": require("./stories/button.stories.tsx"),
    "./.storybook/stories/card.stories.tsx": require("./stories/card.stories.tsx"),
    "./.storybook/stories/icon-button.stories.tsx": require("./stories/icon-button.stories.tsx"),
    "./.storybook/stories/image.stories.tsx": require("./stories/image.stories.tsx"),
    "./.storybook/stories/list.stories.tsx": require("./stories/list.stories.tsx"),
    "./.storybook/stories/login.stories.tsx": require("./stories/login.stories.tsx"),
    "./.storybook/stories/password-reset.stories.tsx": require("./stories/password-reset.stories.tsx"),
    "./.storybook/stories/progress-bar.stories.tsx": require("./stories/progress-bar.stories.tsx"),
    "./.storybook/stories/signup.stories.tsx": require("./stories/signup.stories.tsx"),
    "./.storybook/stories/text-input.stories.tsx": require("./stories/text-input.stories.tsx"),
    "./.storybook/stories/user-profile.stories.tsx": require("./stories/user-profile.stories.tsx"),
  };
};

configure(getStories, module, false);
