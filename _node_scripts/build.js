const ShowBuilder = require('./build_shows');
const buildEvents = require('./build_events');
const buildVenues = require('./build_venues');
const PerformerBuilder = require('./build_performers');
const festivalData = require('./festival-data');
const Q = require('q');
const util = require('./utilities');
const fs = require('fs');

TMP_EVENTS_PATH = festivalData.tmpEventsPath;
FESTIVALTHING_EVENTS_URL = 'https://dl.dropboxusercontent.com/u/22260969/events.json';

TMP_VENUES_PATH = festivalData.tmpVenuesPath;
FESTIVALTHING_VENUE_URL = 'https://dl.dropboxusercontent.com/u/22260969/venues.json';

TMP_SCHEDULE_PATH = festivalData.tmpSchedulePath;
FESTIVALTHING_SCHEDULE_URL = 'https://dl.dropboxusercontent.com/u/22260969/schedule.json';

TMP_PERFORMERS_PATH = festivalData.tmpPerformersPath;
FESTIVALTHING_PERFORMERS_URL = 'https://dl.dropboxusercontent.com/u/22260969/performers.json';

TMP_SHOWS_PATH = festivalData.tmpShowsPath;
FESTIVALTHING_SHOWS_URL = 'https://dl.dropboxusercontent.com/u/22260969/shows.json';

if (!fs.existsSync('tmp')) {
  fs.mkdirSync('tmp');
}

Q.all([
  util.requestJsonAndSave(FESTIVALTHING_VENUE_URL, TMP_VENUES_PATH),
  util.requestJsonAndSave(FESTIVALTHING_EVENTS_URL, TMP_EVENTS_PATH),
  util.requestJsonAndSave(FESTIVALTHING_SCHEDULE_URL, TMP_SCHEDULE_PATH),
  util.requestJsonAndSave(FESTIVALTHING_PERFORMERS_URL, TMP_PERFORMERS_PATH),
  util.requestJsonAndSave(FESTIVALTHING_SHOWS_URL, TMP_SHOWS_PATH)
]).then(function() {
  buildVenues();
  buildEvents();

  const a = new ShowBuilder();
  a.buildFixtures();
  a.createHeadshots();

  const b = new PerformerBuilder();
  b.buildFixtures();
  b.createHeadshots();
}).catch(function(error) {
  console.error(error.stack);
})



