const ESBuildMinifierWebpackPlugin = require("esbuild-minifier-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./sample.js",
  output: {
    path: __dirname + "dist/esbuild",
  },
  optimization: {
    minimizer: [new ESBuildMinifierWebpackPlugin()],
  },
};
