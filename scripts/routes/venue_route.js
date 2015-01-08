(function(){
  "use strict";

  App.VenueRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;

      return this.loadAllData()
        .then(function() {
          return _this.store.find('venue',params.pageUrl.split('-')[0]);
        });
    },
    title: 'Venue'
  });
}());

