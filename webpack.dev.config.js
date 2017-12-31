var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
    entry: "./app/app.js",
    
    output: {
      filename: "./bundle.js"
    },
    
    devServer:{
      inline: true,
      contentBase: './',
      port: 3333
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },

    plugins: [HTMLWebpackPluginConfig]
  }