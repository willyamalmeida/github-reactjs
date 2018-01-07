// process.env.NODE_ENV = 'production'

process.env.EH_AMBIENTE_DE_PRODUCAO = process.env.NODE_ENV === 'production';

 if (!process.env.EH_AMBIENTE_DE_PRODUCAO) {
    require('dotenv').load();
    console.log('dotenv load...');
 }

console.log('Ambiente: ' + process.env.NODE_ENV);

const WebpackDevServer = require( 'webpack-dev-server');
const config = require('./webpack.config');
const webpack = require('webpack');
const appInsights = require('./appInsights');

const compiler = webpack(config);

appInsights.init(config);

const server = new WebpackDevServer(compiler, config.devServer);

server.listen(process.env.PORT || 8080, function() {
    console.log('Servidor inicializado: http://localhost:8080');
});

