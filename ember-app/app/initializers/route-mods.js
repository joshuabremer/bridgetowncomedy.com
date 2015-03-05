import Ember from 'ember';
import $ from 'jquery';
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'route-mods',
  initialize: function() {
    Ember.Route.reopen({
      render: function() {
        this._super();
        window.scrollTo(0, 0);
      },
      activate: function() {
        this._super();
        if (this.get('title')) {
          document.title = this.get('title') + ' | Bridgetown Comedy Festival';
        } else {
          document.title = 'Bridgetown Comedy Festival';
        }
      },
      deactivate: function() {
        if ($(".navbar .navbar-collapse.collapse.in").length) {
          $(".navbar-toggle").not(".collapsed").click();
        }
      },
      loadAllData: function() {
        return Ember.RSVP.hash({
          venues: this.store.find('venue'),
          events: this.store.find('event'),
          performers: this.store.find('performer'),
          shows: this.store.find('show')
        });
      }
    });
  }
};
