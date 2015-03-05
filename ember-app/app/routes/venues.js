import Ember from 'ember';
var $ = Ember.$;

export default Ember.Route.extend({
  model: function() {

    return $.ajax("/venues")
      .then(function(data) {
        return $(data).find("#jekyll-content").html();
    });
  },
  title: 'Venues'
});
