import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var js,
    fjs = document.getElementsByTagName("script")[0],
    p = /^http:/.test(document.location) ? 'http' : 'https';
    js = document.createElement("script");
    js.id = "twitter-wjs";
    js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime();
    fjs.parentNode.insertBefore(js, fjs);
  }
});
