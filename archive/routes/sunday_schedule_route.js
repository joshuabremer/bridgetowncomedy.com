(function(){
  "use strict";

  App.SundayScheduleRoute = Ember.Route.extend({
    model: function() {
      return this.loadAllData();
    },
    title: 'Sunday Schedule'
  });
}());
