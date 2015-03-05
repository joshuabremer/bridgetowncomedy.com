(function(){
  "use strict";

  App.ScheduleRoute = Ember.Route.extend({
    model: function() {
      return this.loadAllData();
    },
    title: 'Schedule'
  });
}());
