var fs = require( "fs" );
var easyimg = require( "easyimage" );
var moment = require( "moment" );
var festivalData = require( "./festival-data" );
var util = require( "./utilities" );
var wrench = require('wrench');
var ent = require('ent');

TMP_EVENTS_PATH = festivalData.tmpEventsPath;
FESTIVALTHING_EVENTS_URL = "http://127.0.0.1:4000/fixtures/festivalthing-events.json";
process.chdir(".");

module.exports = processEventData;


function processEventData() {

  normalizeEventData();
  addPerformerIds();
  addMCsIfTheyExist();
  writeEventsToFixtures();
  createEventPages();
  console.log("Finished: " + "./scripts/event.js");
}

function createEventPages() {
  var eventObj = festivalData.getEventObject();
  var rootPath = "./event/";
  wrench.rmdirSyncRecursive( "./event", true );
  fs.mkdirSync( "./event" );

  for ( var key in eventObj ) {
    var fileName = util.convertToSlug( eventObj[key].Name );
    var dirPath = rootPath + eventObj[key].pageUrl;
    var filePath = dirPath + "/index.html";

    fs.mkdirSync( dirPath );
    fs.openSync( filePath, 'w');

    fs.appendFileSync( filePath, "---\n");
    fs.appendFileSync( filePath, "layout: page\n");
    fs.appendFileSync( filePath, "title: \"" + escapeDoubleQuotes(eventObj[key].Name) + "\"\n");
    fs.appendFileSync( filePath, "category: event \n");
    fs.appendFileSync( filePath, "---\n\n");

    fs.appendFileSync( filePath, "");
  }
}

function escapeDoubleQuotes(str) {
  return str.replace(/\\([\s\S])|(")/g,"\\$1$2"); // thanks @slevithan!
}

function addPerformerIds() {
  var eventObj = festivalData.getEventObject();
  var scheduleObj = festivalData.getScheduleObject();

  for ( var key in eventObj ) {
    eventObj[key].performers = festivalData.getPerformersForEvents(eventObj[key].id);
  }
  fs.writeFileSync( TMP_EVENTS_PATH, JSON.stringify(eventObj, null, " "), "utf8" );
}


function normalizeEventData() {
  var eventObj = festivalData.getEventObject();
  for ( var key in eventObj ) {
    if (eventObj[key].ShowId !== "") {
      eventObj[key].show = eventObj[key].ShowId;
    }
    eventObj[key].Name = ent.decode(eventObj[key].Name);
    eventObj[key].id = eventObj[key].EventId;
    eventObj[key].venue = eventObj[key].VenueId;
    eventObj[key].start_time = moment(eventObj[key].StartTime.split(" to ")[0],"YYYY-MM-DD h:m:s").toISOString();
    eventObj[key].end_time = moment(eventObj[key].StartTime.split(" to ")[1],"YYYY-MM-DD h:m:s").toISOString();

    //var eventDayOfWeek = moment( eventObj[key].start_time ).format("dddd").toLowerCase();
    eventObj[key].pageUrl = eventObj[key].EventId + '-' + util.convertToSlug(eventObj[key].Name);

  }

  eventObj = util.sortArray(eventObj,"start_time");

  fs.writeFileSync( TMP_EVENTS_PATH, JSON.stringify(eventObj, null, " "), "utf8"  );
}

function addMCsIfTheyExist() {
  var eventObj = festivalData.getEventObject();

  for ( var key in eventObj ) {
    var MCId = eventObj[key].MCId;

    if ( !festivalData.doesPerformerExistForId(MCId) ) {
      continue;
    }

    eventObj[key].MCId = eventObj[key].MCId;
    eventObj[key].emcees = [];

    if ( parseInt(eventObj[key].MCId,10) ) {
      eventObj[key].emcees.push( parseInt(eventObj[key].MCId,10) );
    }
  }

  fs.writeFileSync( TMP_EVENTS_PATH, JSON.stringify(eventObj, null, " "), "utf8" );
}

function writeEventsToFixtures() {
  fs.writeFileSync( "./scripts/event.js","/*jshint -W100 */\nApp.Event.FIXTURES = ","utf8" );
  fs.appendFileSync( "./scripts/event.js", festivalData.getEventData(),{encoding:"utf8" });
  fs.appendFileSync( "./scripts/event.js",";");
}
