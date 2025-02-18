const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  // Moved transpilePackages out of experimental
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    '@react-native/assets-registry',
    'expo-asset',
    'expo-font',
    'expo-modules-core',
    'react-native-gesture-handler',
    'expo-splash-screen',
    'react-native-css-interop'
  ],
  webpack: (config, { isServer }) => {
    // Add rule for font files
    config.module.rules.push({
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: `/_next/static/fonts/`,
          outputPath: `${isServer ? "../" : ""}static/fonts/`,
          name: "[name]-[hash].[ext]",
          esModule: false,
        },
      },
    });

    // Add alias for fbjs/invariant
    config.resolve.alias['fbjs/lib/invariant'] = 'fbjs/lib/invariant.js';

    return config;
  },
});
