import DS from 'ember-data';


var EventModel = DS.Model.extend({
  performers: DS.hasMany('performer',{inverse: 'events'}),

    emcees: DS.hasMany('performer',{inverse: 'mc_events'}),

    venue: DS.belongsTo('venue'),

    show: DS.belongsTo('show'),

    Name: DS.attr('string'),

    start_time: DS.attr('string'),

    end_time: DS.attr('string'),

    Cost: DS.attr('string'),

    pageUrl: DS.attr('string'),

    weekday: function() {
      return moment(this.get("start_time")).zone('-07:00').format('dddd').toLowerCase();
    }.property("start_time"),

    getPerformers: function() {
      return this.get("performers").get('content');
    }.property(),

    getPerformerCount: function() {
      return this.get("performers");
    }.property(),





    sortedPerformers: function () {
      var performers = this.get('performers').toArray();
      return performers.sort(function (lhs, rhs) {
        return lhs.get('SortOrder') > rhs.get('SortOrder');
      });
    }.property('performers.@each.isLoaded')

});

EventModel.reopenClass({
  FIXTURES: [
  ]
});

export default EventModel;
