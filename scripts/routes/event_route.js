(function(){
  "use strict";

  App.EventRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;

      return this.loadAllData()
        .then(function(data) {
        return _this.store.find('event', params.pageUrl.split('-')[0] );
      });
    },
    title: 'Event'
  });
}());

