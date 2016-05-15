const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const ObjectBuilder = require('./object-builder');
const ent = require('ent');
const moment = require('moment');
const wrench = require('wrench');

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
    // eventObj = [];
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
      eventObj[key].description = eventObj[key].Description;
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

    // // Refactor this out
    // this.addMCsIfTheyExist();
  },

  createStaticPages: function() {
    var eventObj = festivalData.getEventObject();
    var rootPath = '../event/';
    wrench.rmdirSyncRecursive('../event', true);
    fs.mkdirSync('../event');

    for (var key in eventObj) {
      var dirPath = rootPath + eventObj[key].pageUrl;
      var filePath = dirPath + '/index.html';

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.openSync(filePath, 'w');
      process.stdout.write('.');
      fs.appendFileSync(filePath, '---\n');
      fs.appendFileSync(filePath, 'layout: page\n');
      fs.appendFileSync(filePath, 'title: "' + eventObj[key].name + '"\n');
      fs.appendFileSync(filePath, 'category: event \n');
      fs.appendFileSync(filePath, '---\n\n');

      fs.appendFileSync(filePath, util.htmlToText(eventObj[key].description));
    }

    var message = '\n' + eventObj.length + ' event pages created\n';
    console.log(message);
  }
});






