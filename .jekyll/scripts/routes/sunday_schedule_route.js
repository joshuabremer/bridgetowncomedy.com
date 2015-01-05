(function(){
  "use strict";

  App.SundayScheduleRoute = Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash({
        venues: this.store.find('venue'),
        events: this.store.find('event'),
        performers: this.store.find('performer'),
        shows: this.store.find('show')
      });
    },
    title: 'Sunday Schedule'
  });
}());
