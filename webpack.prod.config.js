const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });
const UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }});
const DedupePlugin = new Webpack.optimize.DedupePlugin();
const CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] });

const config = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: "./app/app.js"
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
    },
    plugins: [
        DefinePlugin, 
        HTMLWebpackPluginConfig, 
        UglifyPlugin, 
        DedupePlugin,
        CommonChunksPlugin
    ]
  };

  module.exports = config;