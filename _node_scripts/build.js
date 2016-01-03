const ShowBuilder = require('./show-builder');
const EventBuilder = require('./event-builder');
const VenueBuilder = require('./venue-builder');
const PerformerBuilder = require('./performer-builder');
const festivalData = require('./festival-data');
const Q = require('q');
const util = require('./utilities');
const fs = require('fs');

const TMP_EVENTS_PATH = festivalData.tmpEventsPath;
const FESTIVALTHING_EVENTS_URL = 'https://dl.dropboxusercontent.com/u/22260969/events.json';

const TMP_VENUES_PATH = festivalData.tmpVenuesPath;
const FESTIVALTHING_VENUE_URL = 'https://dl.dropboxusercontent.com/u/22260969/venues.json';

const TMP_SCHEDULE_PATH = festivalData.tmpSchedulePath;
const FESTIVALTHING_SCHEDULE_URL = 'https://dl.dropboxusercontent.com/u/22260969/schedule.json';

const TMP_PERFORMERS_PATH = festivalData.tmpPerformersPath;
const FESTIVALTHING_PERFORMERS_URL = 'https://dl.dropboxusercontent.com/u/22260969/performers.json';

const TMP_SHOWS_PATH = festivalData.tmpShowsPath;
const FESTIVALTHING_SHOWS_URL = 'https://dl.dropboxusercontent.com/u/22260969/shows.json';

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

  const venueBuilder = new VenueBuilder();
  venueBuilder.buildFixtures();
  venueBuilder.createJSONAPI();

  const eventBuilder = new EventBuilder();
  eventBuilder.buildFixtures();
  eventBuilder.createJSONAPI();

  const showBuilder = new ShowBuilder();
  showBuilder.buildFixtures();
  // showBuilder.createHeadshots();
  showBuilder.createStaticPages();
  showBuilder.createJSONAPI();

  const performerBuilder = new PerformerBuilder();
  performerBuilder.buildFixtures();
  // performerBuilder.createHeadshots();
  performerBuilder.createStaticPages();
  performerBuilder.createJSONAPI();

}).catch(function(error) {
  console.error(error.stack);
});



