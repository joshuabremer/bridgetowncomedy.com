(function(){
  "use strict";

  window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: '#ember-app'
  });

  window.FESTIVAL_START_TIMES = {};
  FESTIVAL_START_TIMES.Thursday = "2014-05-09T01:30:00.000Z";
  FESTIVAL_START_TIMES.Friday =   "2014-05-10T01:00:00.000Z";
  FESTIVAL_START_TIMES.Saturday = "2014-05-10T20:00:00.000Z";
  FESTIVAL_START_TIMES.Sunday =   "2014-05-11T20:00:00.000Z";

  window.FESTIVAL_END_TIMES = {};
  FESTIVAL_END_TIMES.Thursday = "2014-05-09T08:30:00.000Z";
  FESTIVAL_END_TIMES.Friday =   "2014-05-10T10:00:00.000Z";
  FESTIVAL_END_TIMES.Saturday = "2014-05-11T10:00:00.000Z";
  FESTIVAL_END_TIMES.Sunday =   "2014-05-12T08:00:00.000Z";

  App.FixtureAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(records, query, type) {
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

  App.Store = DS.Store.extend({
    revision: 11,
    //adapter: DS.RESTAdapter.create()
    //adapter: DS.LSAdapter.create()
    adapter: 'Fixture'
  });




   // delete if you don't want ember-data

  // if (window.location.hostname != "bridgetowncomedy.com") {
  //   Ember.$.ajaxSetup({
  //     dataType: "JSONP",
  //     crossDomain: true
  //   });
  // }
}());

