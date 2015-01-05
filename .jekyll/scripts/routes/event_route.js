(function(){
  "use strict";

  App.EventRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;
      return Ember.RSVP.hash({
          venues: this.store.find('venue'),
          events: this.store.find('event'),
          performers: this.store.find('performer'),
          shows: this.store.find('show')
      }).then(function(data) {
        return _this.store.find('event',params.events_id);
      });
    },
    title: 'Event'
  });
}());

