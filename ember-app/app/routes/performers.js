import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.loadAllData()
      .then(function(data) {
        return data.performers;
      })
      .catch(function(err) {
        console.error(err);
      });
    },
    title: 'Performers'
});
