
const config = process.env.NODE_ENV === 'production'
  ? require('./webpack.prod.config.js')
  : require('./webpack.dev.config.js');

config.module = {
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
};

config.devServer = {
  inline: true,
  hot: true,
  host: "0.0.0.0",
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