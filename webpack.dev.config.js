const path = require('path');

const config = {
  entry: "./src/app/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devtool: "sourcemap",
  plugins: []
};

module.exports = config;