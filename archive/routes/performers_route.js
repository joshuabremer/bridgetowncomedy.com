(function(){
  "use strict";

  App.PerformersRoute = Ember.Route.extend({
    model: function(params) {
      return this.loadAllData()
        .then(function(data) {
          return data.performers;
        });
    },
    title: 'Performers'
  });
}());

