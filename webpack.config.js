var devConfig = require('./webpack.dev.config.js');
var prodConfig = require('./webpack.prod.config.js');

var config;

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = devConfig;
    break;
  case 'build':
    config = prodConfig;
    break;
  default:
    config = devConfig;
    break;
}
    
config.devServer = {
  inline: true,
  hot: true,
  compress: true,
  contentBase: './',
  port: 8080,
  stats: { colors: true },
  headers: { "Content-Type'": "text/html" },
  allowedHosts: [
    'github-reactjs.azurewebsites.net/'
  ]
};

module.exports = config;