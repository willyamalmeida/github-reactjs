
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

console.log('Ambiente: ' + process.env.NODE_ENV);
console.log('Webpack: ' + process.env.NODE_WEBPACK_CONFIG);

var config = require(process.env.NODE_WEBPACK_CONFIG); 
    
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