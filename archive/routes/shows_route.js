(function(){
  "use strict";

  App.ShowsRoute = Ember.Route.extend({
    model: function() {
      var _this = this;
      return this.loadAllData()
        .then(function() {
          return _this.store.find('show');
        });
    },
    title: 'Shows'
  });
}());

