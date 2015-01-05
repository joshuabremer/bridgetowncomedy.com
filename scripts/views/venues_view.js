(function(){
  "use strict";

  App.VenuesView = Ember.View.extend({
    didInsertElement:function(){
      Ember.run.scheduleOnce('afterRender', this, function(){
        $('[data-src]').each(function() {
          $(this).attr('src',$(this).attr('data-src'))
          $(this).parent().css('padding','').removeClass();
        });
      });
    }
  });
}());