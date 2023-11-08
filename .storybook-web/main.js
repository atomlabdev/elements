const path = require("path");

module.exports = {
  stories: ["../.storybook/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-react-native-web"],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  typescript: {
    reactDocgen: "react-docgen-typescript-plugin",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/templates": path.resolve(__dirname, "../src/templates"),
      "@/examples": path.resolve(__dirname, "../src/examples"),
    };

    return config;
  },
};
