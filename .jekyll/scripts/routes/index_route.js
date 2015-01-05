(function(){
  "use strict";

  App.IndexRoute = Ember.Route.extend({

    model: function() {
      return this.retrievePageJSON('front-page');
    },

    renderTemplate: function() {
      this.render('index');
  });
}());