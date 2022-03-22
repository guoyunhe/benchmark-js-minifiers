module.exports = {
  mode: "production",
  entry: "./sample.js",
  output: {
    path: __dirname + "/dist/no-minify",
  },
  optimization: {
    minimize: false,
  },
};
