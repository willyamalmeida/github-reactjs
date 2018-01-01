
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const appInsights = require('applicationinsights');

if (process.env.NODE_ENV === 'production') {
    appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY).start();

    let appInsightsClient = appInsights.getClient(process.env.APPINSIGHTS_INSTRUMENTATIONKEY);

    config.devServer.setup = function (app) {
        app.use(function (req, res, next) {
            appInsightsClient.trackRequest(req, res);
            next();
        });

        app.use(function (err, req, res, next) {
            appInsightsClient.trackException(err);
        });
    }
}

new WebpackDevServer(webpack(config), config.devServer).listen(process.env.PORT || 8080);