
const appInsights = {

    init: function (ehAmbienteDeProducao, config) {
        if (ehAmbienteDeProducao) {

            const apiInsights = require('applicationinsights');

            apiInsights.setup()
                .setAutoDependencyCorrelation(true)
                .setAutoCollectRequests(true)
                .setAutoCollectPerformance(true)
                .setAutoCollectExceptions(true)
                .setUseDiskRetryCaching(true)
                .start();

            let telemetry = apiInsights.defaultClient;

            let use = function (app) {

                app.use(function (req, res, next) {
                    telemetry.trackRequest(req, res);
                    next();
                });

                app.use(function (err, req, res, next) {
                    telemetry.trackException(err);
                });
            };

            config.devServer.after = use.bind(this);
            config.devServer.before = use.bind(this);
        }
    }
};

module.exports = appInsights;