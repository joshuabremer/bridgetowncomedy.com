import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['SortOrder'],
  sortAscending: true,
  filteredPerformers: function() {
    return this.get('model').filterProperty('ExcludeFromList', false);

  }.property('model.@each.ExcludeFromList')
});
