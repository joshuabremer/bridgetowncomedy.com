const ShowBuilder = require('./show-builder');
const EventBuilder = require('./event-builder');
const VenueBuilder = require('./venue-builder');
const PerformerBuilder = require('./performer-builder');
const festivalData = require('./festival-data');
const Q = require('q');
const util = require('./utilities');
const fs = require('fs');

const TMP_EVENTS_PATH = festivalData.tmpEventsPath;
// const FESTIVALTHING_EVENTS_URL = 'https://dl.dropboxusercontent.com/u/22260969/events.json';
const FESTIVALTHING_EVENTS_URL = 'http://bridgetown.festivalthing.com/export/events/json';

const TMP_VENUES_PATH = festivalData.tmpVenuesPath;
// const FESTIVALTHING_VENUE_URL = 'https://dl.dropboxusercontent.com/u/22260969/venues.json';
// const FESTIVALTHING_VENUE_URL = 'http://bridgetown.festivalthing.com/export/venues/json';
// This venues is still public, so we're setting it to an empty array for now.
const FESTIVALTHING_VENUE_URL = 'http://bridgetown.festivalthing.com/export/venues/json'

const TMP_SCHEDULE_PATH = festivalData.tmpSchedulePath;
// const FESTIVALTHING_SCHEDULE_URL = 'https://dl.dropboxusercontent.com/u/22260969/schedule.json';
const FESTIVALTHING_SCHEDULE_URL = 'http://bridgetown.festivalthing.com/export/schedule/json';

const TMP_PERFORMERS_PATH = festivalData.tmpPerformersPath;
// const FESTIVALTHING_PERFORMERS_URL = 'https://dl.dropboxusercontent.com/u/22260969/performers.json';
const FESTIVALTHING_PERFORMERS_URL = 'http://bridgetown.festivalthing.com/export/performers/json';

const TMP_SHOWS_PATH = festivalData.tmpShowsPath;
// const FESTIVALTHING_SHOWS_URL = 'https://dl.dropboxusercontent.com/u/22260969/shows.json';
//const FESTIVALTHING_SHOWS_URL = 'http://bridgetown.festivalthing.com/export/submitted-shows/json';
// This shows is still public, so we're setting it to an empty array for now.
const FESTIVALTHING_SHOWS_URL = 'http://bridgetown.festivalthing.com/export/submitted-shows/json'

process.chdir(__dirname);

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

  const venueBuilder      = new VenueBuilder();
  const eventBuilder      = new EventBuilder();
  const showBuilder       = new ShowBuilder();
  const performerBuilder  = new PerformerBuilder();


  venueBuilder.buildFixtures();
  venueBuilder.createStaticPages();
  venueBuilder.createJSONAPI();

  eventBuilder.buildFixtures();
  eventBuilder.createJSONAPI();
  eventBuilder.createStaticPages();


  showBuilder.buildFixtures();
  showBuilder.createHeadshots();
  showBuilder.createStaticPages();
  showBuilder.createJSONAPI();


  performerBuilder.buildFixtures();
  performerBuilder.createHeadshots();
  performerBuilder.createStaticPages();
  performerBuilder.createJSONAPI();

}).catch(function(error) {
  console.error(error.stack);
});



