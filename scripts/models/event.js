(function(){
  "use strict";

  App.Event = DS.Model.extend({

    performers: DS.hasMany('performer', {async: true}),

    emcees: DS.hasMany('performer', {async: true}),

    venue: DS.belongsTo('venue', {async: true}),

    show: DS.belongsTo('show', {async: true}),

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

}());
