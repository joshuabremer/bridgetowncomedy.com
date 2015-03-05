(function(){
  "use strict";

  App.PressRoute = Ember.Route.extend({
    model: function() {
      var _this = this;

      return $.ajax("/press")
        .then(function(data) { return $(data).find("#jekyll-content").html()
      });
    },
    title: 'Press'
  });
}());

