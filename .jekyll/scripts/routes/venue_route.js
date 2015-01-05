(function(){
  "use strict";

  App.VenueRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;
      this.set('params_slug',params.slug);
      return Ember.RSVP.hash({
          shows: this.store.find('show'),
          performers: this.store.find('performer'),
          events: this.store.find('event'),
          venues: this.store.find('venue')
      }).then(function() {
        return _this.store.find('venue',params.pageUrl.split('-')[0]);
      });
    },
    title: 'Venue'
  });
}());

