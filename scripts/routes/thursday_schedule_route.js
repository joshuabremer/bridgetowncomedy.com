(function(){
  "use strict";

  App.ThursdayScheduleRoute = Ember.Route.extend({
    model: function() {
      return this.loadAllData();
    },
    title: 'Thursday Schedule'
  });
}());
