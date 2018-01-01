var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });
var UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }});
var DedupePlugin = new Webpack.optimize.DedupePlugin();
var CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] });

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: "./app/app.js"
    },

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
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

    plugins: [
        DefinePlugin, 
        HTMLWebpackPluginConfig, 
        UglifyPlugin, 
        DedupePlugin,
        CommonChunksPlugin
    ]
  }