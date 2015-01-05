(function(){
  "use strict";

  App.PerformerRoute = Ember.Route.extend({
    model: function(params) {


      var _this = this;
      this.set('params_slug',params.slug);
      return this.loadAllData()
        .then(function() {
          return _this.store.find('performer',params.pageUrl.split('-')[0]);
        });
    },
    title: 'Performer'
  });
}());

