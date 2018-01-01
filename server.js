
const WebpackDevServer = require('webpack-dev-server');
//const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const webpack = require('webpack');
// const express = require('express');

// const app = express();
const compiler = webpack(config);

// if (process.env.NODE_ENV === 'production') {
//     let appInsights = require('applicationinsights');

//     appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY).start();
//     let aiClient = appInsights.defaultClient;

//     app.use(function (req, res, next) {
//         aiClient.trackRequest(req, res);
//         next();
//     });

//     app.use(function (err, req, res, next) {
//         aiClient.trackException(err);
//     });
// }

// const webpackMiddleware = WebpackDevMiddleware(compiler, config.devServer);
// app.listen(8080, webpackMiddleware.listen);

new WebpackDevServer(webpack(config), config.devServer).listen(process.env.PORT || 8080);