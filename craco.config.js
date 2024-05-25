module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        (warning) =>
          warning.message.includes(
            "Failed to parse source map from '@mediapipe/tasks-vision/vision_bundle_mjs.js.map'"
          ),
        (warning) =>
          warning.message.includes(
            "Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):"
          ),
        (warning) =>
          warning.message.includes(
            "react-scripts > babel-preset-react-app > @babel/plugin-proposal"
          ),
      ];
      return webpackConfig;
    },
  },
};
