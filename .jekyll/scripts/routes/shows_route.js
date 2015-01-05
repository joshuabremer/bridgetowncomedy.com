(function(){
  "use strict";

  App.ShowsRoute = Ember.Route.extend({
    model: function() {
      var _this = this;
      return Ember.RSVP.hash({
          venues: this.store.find('venue'),
          events: this.store.find('event'),
          performers: this.store.find('performer'),
          shows: this.store.find('show')
      }).then(function() {
        return _this.store.find('show');
      });
    },
    title: 'Shows'
  });
}());

