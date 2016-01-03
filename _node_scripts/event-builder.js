const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const ObjectBuilder = require('./object-builder');
const ent = require('ent');
const moment = require('moment');

module.exports = ObjectBuilder.extend({
  TMP_PATH: festivalData.tmpEventsPath,
  API_PATH: '../api/events.json',

  normalizeData: function() {
    var eventObj = festivalData.getEventObject();
    for (var key in eventObj) {
      if (eventObj[key].ShowId !== '') {
        eventObj[key].show = eventObj[key].ShowId;
      }
      eventObj[key].Name = ent.decode(eventObj[key].Name);
      eventObj[key].id = eventObj[key].EventId;
      eventObj[key].venue = eventObj[key].VenueId;
      eventObj[key].start_time = moment(eventObj[key].StartTime.split(' to ')[0] + '-07:00').utcOffset(-7).toISOString();
      eventObj[key].end_time = moment(eventObj[key].StartTime.split(' to ')[1] + '-07:00').utcOffset(-7).toISOString();

      //var eventDayOfWeek = moment( eventObj[key].start_time ).format("dddd").toLowerCase();
      eventObj[key].pageUrl = eventObj[key].EventId + '-' + util.convertToSlug(eventObj[key].Name);
    }

    eventObj = util.sortArray(eventObj, 'id');

    fs.writeFileSync(this.TMP_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');
  },

  addRelationships: function() {
    var eventObj = festivalData.getEventObject();

    for (var key in eventObj) {
      eventObj[key].performers = festivalData.getPerformersForEvents(eventObj[key].id);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');

    // Refactor this out
    this.addMCsIfTheyExist();
  },

  writeToFixtureFile: function() {
    const eventData = {events: festivalData.getEventObject()};
    fs.writeFileSync(this.API_PATH, JSON.stringify(eventData, null, 2), 'utf8');
  },

  addMCsIfTheyExist: function() {
    var eventObj = festivalData.getEventObject();

    for (var key in eventObj) {
      var MCId = eventObj[key].MCId;

      if (!festivalData.doesPerformerExistForId(MCId)) {
        continue;
      }

      eventObj[key].MCId = eventObj[key].MCId;
      eventObj[key].emcees = [];

      if (parseInt(eventObj[key].MCId, 10)) {
        eventObj[key].emcees.push(parseInt(eventObj[key].MCId, 10));
      }
    }

    fs.writeFileSync(this.TMP_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');
  }
});






