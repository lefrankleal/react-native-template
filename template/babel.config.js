module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@context': './src/context',
          '@media': './src/media',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
