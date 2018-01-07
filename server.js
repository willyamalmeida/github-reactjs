
const ehAmbienteDeProducao = process.env.NODE_ENV === 'production';

 if (!ehAmbienteDeProducao) {
    require('dotenv').load();
 }

console.log('Ambiente: ' + process.env.NODE_ENV);

const WebpackDevServer = require( 'webpack-dev-server');
const config = require('./webpack.config');
const webpack = require('webpack');
const appInsights = require('./appInsights');

const compiler = webpack(config);

appInsights.init(ehAmbienteDeProducao, config);

const server = new WebpackDevServer(compiler, config.devServer);

server.listen(process.env.PORT || 8080, function() {
    console.log('Servidor inicializado: http://localhost:8080');
});

