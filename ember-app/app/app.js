import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.FixtureAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query) {
    return records.filter(function(record) {
      for(var key in query) {
          if (!query.hasOwnProperty(key)) { continue; }
          var value = query[key];
          if (record[key] !== value) { return false; }
      }
      return true;
    });
  }
});

App.ApplicationStore = DS.Store.extend({
  revision: 11,
  //adapter: DS.RESTAdapter.create()
  //adapter: DS.LSAdapter.create()
  adapter: 'Fixture'
});

loadInitializers(App, config.modulePrefix);

export default App;
