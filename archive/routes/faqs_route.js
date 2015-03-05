(function(){
  "use strict";

  App.FaqsRoute = Ember.Route.extend({
    model: function(params) {
      var _this = this;

      return $.ajax("/faqs")
        .then(function(data) { return $(data).find("#jekyll-content").html()
      });
    },
    title: 'FAQs'
  });
}());

