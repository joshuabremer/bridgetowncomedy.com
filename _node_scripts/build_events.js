const fs            = require('fs');
const easyimg       = require('easyimage');
const moment        = require('moment');
const festivalData  = require('./festival-data');
const util          = require('./utilities');
const wrench        = require('wrench');
const ent           = require('ent');

const TMP_EVENTS_PATH = festivalData.tmpEventsPath;
const API_PATH = '../api/events.json';

module.exports = processEventData;


function processEventData() {
  normalizeEventData();
  addPerformerIds();
  addMCsIfTheyExist();

  const eventData = {events: festivalData.getEventObject()};

  fs.writeFileSync(API_PATH, JSON.stringify(eventData, null, 2), 'utf8');

  console.log('Finished: ' + API_PATH);
}

function escapeDoubleQuotes(str) {
  return str.replace(/\\([\s\S])|(")/g, '\\$1$2'); // thanks @slevithan!
}

function addPerformerIds() {
  var eventObj = festivalData.getEventObject();

  for (var key in eventObj) {
    eventObj[key].performers = festivalData.getPerformersForEvents(eventObj[key].id);
  }
  fs.writeFileSync(TMP_EVENTS_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');
}

function normalizeEventData() {
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

  fs.writeFileSync(TMP_EVENTS_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');
}

function addMCsIfTheyExist() {
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

  fs.writeFileSync(TMP_EVENTS_PATH, JSON.stringify(eventObj, null, ' '), 'utf8');
}
