(function(){
  "use strict";

  App.FridayScheduleRoute = Ember.Route.extend({
    model: function() {
      return this.loadAllData();
    },
    title: 'Friday Schedule'
  });
}());
