const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // 配合vue-template-compiler解析SFC文件
    new CleanWebpackPlugin(), // 清理output目录下的缓存
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"), // 我们要使用的 html 模板地址
      filename: "index.html", // 打包后输出的文件名
      title: "手搭 Vue2.x 开发环境", // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }), // 生成html文件/自动插入js/css
  ],
  devtool: "eval-source-map",
};
