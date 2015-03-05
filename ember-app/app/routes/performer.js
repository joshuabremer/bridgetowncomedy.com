import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  var _this = this;

  return this.loadAllData()
    .then(function() {
      return _this.store.find('performer',params.pageUrl.split('-')[0]);
    });
  },
  title: 'Performer'
});
