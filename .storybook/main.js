/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/component/**/**/stories.jsx","../src/component/**/**/*.stories.jsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
