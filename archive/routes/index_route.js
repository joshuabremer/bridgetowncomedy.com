(function(){
  "use strict";

  App.IndexRoute = Ember.Route.extend({

    model: function() {
      // Do nothing...
    },

    renderTemplate: function() {
      this.render('index');
      this.render('jumbotron_index', { outlet: 'jumbotron' });
    }
  });
}());