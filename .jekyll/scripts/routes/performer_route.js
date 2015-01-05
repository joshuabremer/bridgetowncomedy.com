(function(){
  "use strict";

  App.PerformerRoute = Ember.Route.extend({
    model: function(params) {


      var _this = this;
      this.set('params_slug',params.slug);
      return Ember.RSVP.hash({
          venues: this.store.find('venue'),
          performers: this.store.find('performer'),
          events: this.store.find('event'),
          shows: this.store.find('show')
      }).then(function() {
        return _this.store.find('performer',params.pageUrl.split('-')[0]);
      });
    },
    title: 'Performer'
  });
}());

