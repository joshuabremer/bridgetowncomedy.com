var ShowBuilder = require( "./build_shows");
var buildEvents = require( "./build_events");
var buildVenues = require( "./build_venues");
var PerformerBuilder = require( "./build_performers");
var festivalData = require( "./festival-data" );
var Q = require( "q" );
var util = require( "./utilities" );

TMP_EVENTS_PATH = festivalData.tmpEventsPath;
FESTIVALTHING_EVENTS_URL = "http://127.0.0.1:4000/fixtures/festivalthing-events.json";

TMP_VENUES_PATH = festivalData.tmpVenuesPath;
FESTIVALTHING_VENUE_URL = "http://127.0.0.1:4000/fixtures/festivalthing-venues.json";

TMP_SCHEDULE_PATH = festivalData.tmpSchedulePath;
FESTIVALTHING_SCHEDULE_URL = "http://127.0.0.1:4000/fixtures/festivalthing-schedule.json";

TMP_PERFORMERS_PATH = festivalData.tmpPerformersPath;
FESTIVALTHING_PERFORMERS_URL = "http://127.0.0.1:4000/fixtures/festivalthing-performers.json";

TMP_SHOWS_PATH = festivalData.tmpShowsPath;
FESTIVALTHING_SHOWS_URL = "http://127.0.0.1:4000/fixtures/festivalthing-shows.json";


Q.all([
  util.requestJsonAndSave( FESTIVALTHING_VENUE_URL, TMP_VENUES_PATH ),
  util.requestJsonAndSave( FESTIVALTHING_EVENTS_URL, TMP_EVENTS_PATH),
  util.requestJsonAndSave( FESTIVALTHING_SCHEDULE_URL, TMP_SCHEDULE_PATH),
  util.requestJsonAndSave( FESTIVALTHING_PERFORMERS_URL, TMP_PERFORMERS_PATH),
  util.requestJsonAndSave( FESTIVALTHING_SHOWS_URL, TMP_SHOWS_PATH)
]).then(function() {
  // buildVenues();
  // buildEvents();
  // buildPerformers();
  var a = new ShowBuilder();
  a.buildFixtures();
  var b = new PerformerBuilder();
  b.buildFixtures();
}).catch(function(error) {
  console.error(error.stack);
})



