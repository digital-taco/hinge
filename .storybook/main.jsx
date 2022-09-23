const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    const { config: mainConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    // This is so path aliases will work in storybook
    return mergeConfig(config, {
      resolve: {
        alias: { "@": path.resolve(__dirname, "../src") },
      },
    });
  },
}