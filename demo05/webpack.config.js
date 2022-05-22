const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("我是环境", process.env.NODE_ENV);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash:7].css" }),
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
};
