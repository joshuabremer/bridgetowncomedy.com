(function(){
  "use strict";

  App.ContactRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;

      return $.ajax("/contact")
        .then(function(data) { return $(data).find("#jekyll-content").html()
      });
    },
    title: 'Contact'
  });
}());

