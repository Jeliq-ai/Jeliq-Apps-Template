import type { Preview } from '@storybook/react';
import { withScreenshot } from 'storycap';
import withProvider from './withProvider';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { mswHandlers } from '@core';
import openAPISchema from '../src/services/api/schema.json';
import '../web/globals.css';

initialize(); // Initialize MSW

const preview: Preview = {
  globals: {
    locale: 'ja_JP',
    locales: {
      en_US: 'English (US)',
      ja_JP: '日本語',
    },
  },
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    screenshot: {
      delay: 10,
      fullPage: false,
    },
    nextjs: {
      appDirectory: true,
    },
    msw: {
      handlers: mswHandlers(openAPISchema),
    },

  },
  loaders: [ mswLoader ],
  decorators: [
    withProvider,
    withScreenshot(),
  ],
};

export default preview;
