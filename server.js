
const ehAmbienteDeProducao = process.env.NODE_ENV === 'production';

 if (!ehAmbienteDeProducao) {
    require('dotenv').load();
 }

console.log('Ambiente: ' + process.env.NODE_ENV);

const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const webpack = require('webpack');
const compiler = webpack(config);

const appInsights = require('./appInsights');
appInsights.init(ehAmbienteDeProducao, config);

new WebpackDevServer(compiler, config.devServer).listen(process.env.PORT || 8080);

