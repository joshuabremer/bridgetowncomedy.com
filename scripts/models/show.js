(function(){
  "use strict";

  App.Show = DS.Model.extend({

    events: DS.hasMany('event', {async: true}),

    Name: DS.attr('string'),

    PhotoUrl: DS.attr('string'),

    SortOrder: DS.attr('number'),

    slug: function() {
      return sluggify(this.get('Name'));
    }.property('Name'),

    Bio: DS.attr('string'),
    Copy: DS.attr('string'),

    pageUrl: DS.attr('string'),

    headshot300: function() {
      return '/assets/show-images/show-' + cleanStr(this.get('Name')) + '-300x300.jpg';
    }.property('Name'),

    backgroundImageCSS: function() {
      return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }.property("PhotoUrl"),

    sortedEvents: function () {
      var events = this.get('events').toArray();
      return events.sort(function (lhs, rhs) {
        return lhs.get('start_time') > rhs.get('start_time');
      });
    }.property('events.@each.isLoaded')

  });

  function sluggify(string) {
    string = string || "";
    return string.replace(/\W/g, '-').toLowerCase();
  }

  function cleanStr(string) {
    string = string || "";
    return string.replace(/\W/g, '').toLowerCase();
  }

}());
