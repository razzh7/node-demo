const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

console.log("我是环境", process.env.NODE_ENV);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash:7].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
