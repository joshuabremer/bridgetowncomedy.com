import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Do nothing...
  },

  renderTemplate: function() {
    this.render('index');
    this.render('jumbotron_index', { outlet: 'jumbotron' });
  }
});
