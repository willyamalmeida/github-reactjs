const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

const config = {
  entry: "./app/app.js",
  output: {
    filename: "./bundle.js"
  },
  devtool: "sourcemap",
  plugins: [HTMLWebpackPluginConfig]
};

module.exports = config;