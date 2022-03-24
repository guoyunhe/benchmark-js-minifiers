const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./sample.js",
  output: {
    path: __dirname + "/dist/terser",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
