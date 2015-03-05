import Ember from 'ember';
import DS from 'ember-data';

var $ = Ember.$;
var Venue = DS.Model.extend({
   events: DS.hasMany('event'),

    Name: DS.attr('string'),

    address: DS.attr('string'),

    pageUrl: DS.attr('string'),

    thursdayEvents: function() {
      var events = this.get('events').toArray();
      var thursdayEvents = [];
      $.each(events,function(index,event) {
        if (moment(event.get('start_time')).format('dddd') === 'Thursday') {
          thursdayEvents.push(event);
        }
      });
      return thursdayEvents;
    }.property('events.@each.isLoaded'),

    fridayEvents: function() {
      var events = this.get('events').toArray();
      var fridayEvents = [];
      $.each(events,function(index,event) {
        if (moment(event.get('start_time')).format('dddd') === 'Friday') {
          fridayEvents.push(event);
        }
      });
      return fridayEvents;
    }.property('events.@each.isLoaded'),

    saturdayEvents: function() {
      var events = this.get('events').toArray();
      var saturdayEvents = [];
      $.each(events,function(index,event) {
        if (moment(event.get('start_time')).format('dddd') === 'Saturday') {
          saturdayEvents.push(event);
        }
      });
      return saturdayEvents;
    }.property('events.@each.isLoaded'),

    sundayEvents: function() {
      var events = this.get('events').toArray();
      var sundayEvents = [];
      $.each(events,function(index,event) {
        if (moment(event.get('start_time')).format('dddd') === 'Sunday') {
          sundayEvents.push(event);
        }
      });
      return sundayEvents;
    }.property('events.@each.isLoaded')
});

Venue.reopenClass({
  FIXTURES: [
  ]
});

export default Venue;
