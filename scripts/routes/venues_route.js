(function(){
  "use strict";

  App.VenuesRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;

      return $.ajax("/venues")
        .then(function(data) {
          debugger;
          return $(data).find("#jekyll-content").html()
      });
    },
    title: 'Venue'
  });
}());

