const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./sample.js",
  output: {
    path: __dirname + "/dist/esbuild",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
      }),
    ],
  },
};
