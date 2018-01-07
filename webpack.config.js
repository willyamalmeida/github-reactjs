const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = process.env.EH_AMBIENTE_DE_PRODUCAO
  ? require('./webpack.prod.config.js')
  : require('./webpack.dev.config.js');

const ExtractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: !process.env.EH_AMBIENTE_DE_PRODUCAO
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './src/index.html' });

config.plugins.push(HTMLWebpackPluginConfig);
config.plugins.push(ExtractSass);

config.module = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractSass.extract({
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: { sourceMap: !process.env.EH_AMBIENTE_DE_PRODUCAO }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS        
            options: { sourceMap: !process.env.EH_AMBIENTE_DE_PRODUCAO }
          }
        ],
        fallback: 'style-loader' // use style-loader in development
      })
    },
    {
      test: /\.png$/,
      loader: 'file-loader'
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader'
    } 
  ]
};

config.devServer = {
  inline: true,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  compress: true,
  contentBase: './',
  port: 8080,
  stats: {
    colors: true,
    reasons: true,
    modules: true,
    errorDetails: true
  }
};

module.exports = config;