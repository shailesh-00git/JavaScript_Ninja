const path = require("path");
module.exports = {
  entry: "./src/index.js", // your main JS file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // output bundle
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel-preset-env"],
          },
        },
      },
    ],
  },
};
