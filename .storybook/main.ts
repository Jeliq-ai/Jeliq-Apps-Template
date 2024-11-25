export const framework = {
  name: '@storybook/react-vite',
  options: {},
};

export const stories = [
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];

export const addons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
];

export const core = {
  builder: {
    name: '@storybook/builder-vite',
    options: {
      viteConfigPath: './vite.config.mjs',
    },
  },
};

export const staticDirs = [
  '../public',
];

export const docs = {
  autodocs: true,
};

export const typescript = {
  reactDocgen: 'react-docgen-typescript',
};

export const viteFinal = async (config, { configType }) => {
  return config;
};
