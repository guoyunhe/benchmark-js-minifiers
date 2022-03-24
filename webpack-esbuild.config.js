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
        // `terserOptions` options will be passed to `esbuild`
        // Link to options - https://esbuild.github.io/api/#minify
        // Note: the `minify` options is true by default (and override other `minify*` options), so if you want to disable the `minifyIdentifiers` option (or other `minify*` options) please use:
        // terserOptions: {
        //   minify: false,
        //   minifyWhitespace: true,
        //   minifyIdentifiers: false,
        //   minifySyntax: true,
        // },
        terserOptions: {},
      }),
    ],
  },
};
