/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bridgetowncomedy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com *.twitter.com *.twimg.com",
      'font-src': "'self' data: use.typekit.net fonts.gstatic.com netdna.bootstrapcdn.com",
      'connect-src': "'self'",
      'img-src': "'self'  data: www.facebook.com p.typekit.net *.twimg.com *.twitter.com",
      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.googleapis.com netdna.bootstrapcdn.com *.twitter.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com *.twitter.com",
      'report-uri': "'none'"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
