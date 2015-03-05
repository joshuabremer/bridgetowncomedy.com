(function(){
  "use strict";

  App.ScheduleController = Ember.ObjectController.extend({
    actions: {
      filterThursday: function() {
        this.set('scheduleClass','filter-items filter-thursday');
      },
      filterFriday: function() {
        this.set('scheduleClass','filter-items filter-friday');
      },
      filterSaturday: function() {
        this.set('scheduleClass','filter-items filter-saturday');
      },
      filterSunday: function() {
        this.set('scheduleClass','filter-items filter-sunday');
      },
      filterGrid: function() {
        $('.schedule-table').show();
        $('.schedule-list').hide();
      },
      filterList: function() {
        $('.schedule-table').hide();
        $('.schedule-list').show();
      }
    },

    scheduleClass: "",


    events: (function() {
      return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
        sortProperties: ['start_time'],
        content: this.get('content.events')
      });
    }).property('content.events')
  });
}());

