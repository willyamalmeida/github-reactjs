const Webpack = require('webpack');
const path = require('path');

const DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

const UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }});
const DedupePlugin = new Webpack.optimize.DedupePlugin();
const CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] });

const config = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: './src/app/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
    },
    plugins: [
        DefinePlugin, 
        UglifyPlugin, 
        DedupePlugin,
        CommonChunksPlugin
    ]
  };

  module.exports = config;