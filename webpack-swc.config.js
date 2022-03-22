const { SWCMinifyPlugin } = require("swc-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./sample.js",
  output: {
    path: __dirname + "/dist/swc",
  },
  optimization: {
    minimizer: [new SWCMinifyPlugin()],
  },
};
