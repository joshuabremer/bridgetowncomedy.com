var fs = require("fs");
var festivalData = require( "./festival-data" );
var util = require( "./utilities" );
var wrench = require('wrench');

TMP_VENUE_PATH = festivalData.tmpVenuesPath;
FESTIVALTHING_VENUE_URL = "http://127.0.0.1:4000/fixtures/festivalthing-venues.json";
process.chdir( "." );

module.exports = processVenueData;



var addresses = {
  "7608":{"Address":"4811 SE Hawthorne Blvd, Portland, OR 97215"},
  "7609":{"Address":"4811 SE Hawthorne Blvd, Portland, OR 97215"}  ,
  "7620":{"Address":"720 SE Hawthorne Blvd, Portland, OR 97214"}  ,
  "7619":{"Address":"720 SE Hawthorne Blvd, Portland, OR 97214"}  ,
  "7610":{"Address":"4801 SE Hawthorne Blvd, Portland, OR 97215"}  ,
  "7611":{"Address":"722 East Burnside , Portland, OR 97214 "}  ,
  "8571":{"Address":"5225 NE Martin Luther King Jr Blvd, Portland, OR 97211"}  ,
  "7612":{"Address":"830 E Burnside St, Portland, OR 97214"}  ,
  "7613":{"Address":"4904 SE Hawthorne Portland, OR 97215"}  ,
  "7966":{"Address":"511 NW Couch St, Portland, OR 97209"}  ,
  "7614":{"Address":"1507 SE 39th Ave, Portland, OR 97214"}  ,
  "7615":{"Address":"1507 SE 39th Ave, Portland, OR 97214"}  ,
  "7616":{"Address":"800 E Burnside St, Portland, OR 97214"}  ,
  "7617":{"Address":"4825 SE Hawthorne Blvd, Portland, OR 97215"}  ,
  "7618":{"Address":"1305 SE 8th Ave, Portland, OR 97214"}
};


function processVenueData() {
  normalizeVenueData();
  addEventIds();
  fs.writeFileSync("./scripts/venue.js","/*jshint -W100 */\nApp.Venue.FIXTURES = ","utf8");
  fs.appendFileSync("./scripts/venue.js",festivalData.getVenueData(),{encoding:"utf8"});
  fs.appendFileSync("./scripts/venue.js",";");
  createVenuePages();
  console.log("Finished: " + "./scripts/venue.js");
}

function createVenuePages() {
  var venueObj = festivalData.getVenueObject();
  var rootPath = "./venue/";
  wrench.rmdirSyncRecursive( "./venue", true );
  fs.mkdirSync( "./venue" );

  for ( var key in venueObj ) {
    var fileName = util.convertToSlug( venueObj[key].Name );
    var dirPath = rootPath + venueObj[key].pageUrl;
    var filePath = dirPath + "/index.html";

    fs.mkdirSync( dirPath );
    fs.openSync( filePath, 'w');

    fs.appendFileSync( filePath, "---\n");
    fs.appendFileSync( filePath, "layout: page\n");
    fs.appendFileSync( filePath, "title: \"" + venueObj[key].Name + "\"\n");
    fs.appendFileSync( filePath, "category: venue \n");
    fs.appendFileSync( filePath, "---\n\n");

    fs.appendFileSync( filePath, "Blah Blah Blah");
  }
}


function addEventIds() {
  var venueObj = festivalData.getVenueObject();

  for (var key in venueObj) {
    venueObj[key].events = getEventsForVenue( venueObj[key].id )
  }
  fs.writeFileSync( TMP_VENUE_PATH, JSON.stringify(venueObj, null, " "), "utf8" );
}

function getEventsForVenue( id ) {
  var venueObj = festivalData.getVenueObject();
  var eventObj = festivalData.getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].VenueId,10);
    if (idCheck === parseInt(id,10) && festivalData.doesEventExistForId(eventObj[key].EventId)) {
      returnArray.push(eventObj[key].EventId);
    }
  }
  return returnArray;
}


function normalizeVenueData() {
  var venueObj = festivalData.getVenueObject();

  for (var key in venueObj) {
    venueObj[key].id = venueObj[key].VenueId;
    venueObj[key].address = addresses[venueObj[key].id].Address;
    venueObj[key].pageUrl = venueObj[key].id + "-" + util.convertToSlug(venueObj[key].Name);
  }
  fs.writeFileSync( TMP_VENUE_PATH, JSON.stringify(venueObj, null, " "), "utf8");
}






