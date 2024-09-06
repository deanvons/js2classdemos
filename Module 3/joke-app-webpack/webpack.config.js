const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");
const path = require("path");

module.exports = {
  mode:"development",
  entry: {
    bundle: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean:true,
    assetModuleFilename: "[name][ext]"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Joke Website",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        type:'asset/resource',
      }
    ],
  },
};
