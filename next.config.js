const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  experimental: {
    transpilePackages: [
      // NOTE: Even though `react-native` is never used in Next.js,
      // you need to list `react-native` because `react-native-web`
      // is aliased to `react-native`.
      'react-native',
      'react-native-web',
      'expo',
      // Add more React Native/Expo packages here...
    ],
  },
});
