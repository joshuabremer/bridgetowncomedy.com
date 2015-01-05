(function(){
  "use strict";

  App.SaturdayScheduleRoute = Ember.Route.extend({
    model: function() {
      return this.loadAllData();
    },
    title: 'Saturday Schedule'
  });
}());
