const SwcMinifyWebpackPlugin = require("swc-minify-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./sample.js",
  output: {
    path: __dirname + "/dist/swc",
  },
  optimization: {
    minimize: true,
    minimizer: [new SwcMinifyWebpackPlugin()],
  },
};
