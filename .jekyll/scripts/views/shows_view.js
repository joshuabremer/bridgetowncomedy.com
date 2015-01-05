(function(){
  "use strict";

  App.ShowsView = Ember.View.extend({
    templateName: 'shows_gallery',
    didInsertElement:function(){
      $("img.lazy").lazyload({
        effect : "fadeIn"
      });
    }
  });
}());