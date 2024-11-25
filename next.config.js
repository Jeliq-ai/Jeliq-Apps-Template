const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.web.json'
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/src': path.resolve(__dirname, './src'),
      'react-native$': 'react-native-web',
    };

    config.resolve.extensions = [
      '.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js',
      ...config.resolve.extensions,
    ];

    config.module.rules.push(
      {
        test: /\.js$|tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          ...compileNodeModules,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ["@babel/preset-env", {
                  targets: {
                    node: "current"
                  }
                }],
                "@babel/preset-react",
                "@babel/preset-typescript",
                'module:metro-react-native-babel-preset'
              ],
              plugins: [
                ['react-native-web'],
              ],
            }
          },
        ],
      },
    );

    return config;
  },

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

const compileNodeModules = [
  "react-native-vector-icons",
].map(moduleName => path.resolve(__dirname, `node_modules/${moduleName}`));

module.exports = nextConfig;
