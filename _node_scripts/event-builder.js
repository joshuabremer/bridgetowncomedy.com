const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const ObjectBuilder = require('./object-builder');
const ent = require('ent');
const moment = require('moment');

module.exports = ObjectBuilder.extend({
  WHITELISTED_ATTRIBUTES: [
    'id',
    'events',
    'performers',
    'emcee',
    'venue',
    'show',
    'name',
    'description',
    'startDateTime',
    'endDateTime',
    'price',
    'pageUrl'
  ],
  MODEL_NAME: 'event',
  TMP_PATH: festivalData.tmpEventsPath,
  API_PATH: '../api/events.json',

  normalizeData: function() {
    var eventObj = festivalData.getEventObject();
    eventObj = [];
    for (var key in eventObj) {
      if (eventObj[key].ShowId !== '') {
        eventObj[key].show = eventObj[key].ShowId;
      }

      eventObj[key].name = ent.decode(eventObj[key].Name);
      eventObj[key].emcee = Number(eventObj[key].MCId);
      eventObj[key].id = Number(eventObj[key].EventId);
      eventObj[key].price = Number(eventObj[key].Cost.replace('$',''));
      eventObj[key].venue = Number(eventObj[key].VenueId);
      eventObj[key].startDateTime = moment(eventObj[key].StartTime.split(' to ')[0] + '-07:00').utcOffset(-7).toISOString();
      eventObj[key].endDateTime = moment(eventObj[key].StartTime.split(' to ')[1] + '-07:00').utcOffset(-7).toISOString();

      //var eventDayOfWeek = moment( eventObj[key].start_time ).format("dddd").toLowerCase();
      eventObj[key].pageUrl = eventObj[key].id + '-' + util.convertToSlug(eventObj[key].name);
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



  addMCsIfTheyExist: function() {
    // var eventObj = festivalData.getEventObject();

    // for (var key in eventObj) {
    //   var MCId = eventObj[key].MCId;

    //   if (!festivalData.doesPerformerExistForId(MCId)) {
    //     continue;
    //   }

    //   if (MCId) {
    //     eventObj[key].emcee = parseInt(MCId, 10);
    //   }
    // }

    // fs.writeFileSync(this.TMP_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');
  }
});






