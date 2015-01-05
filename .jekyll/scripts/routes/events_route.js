(function(){
  "use strict";

  App.EventsRoute = Ember.Route.extend({
    model: function() {
      return Event.find();
    }
  });
}());


