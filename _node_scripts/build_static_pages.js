var ShowBuilder = require("./build_shows");
var buildEvents = require("./build_events");
var buildVenues = require("./build_venues");
var PerformerBuilder = require("./build_performers");
var festivalData = require("./festival-data");
var Q = require("q");
var util = require("./utilities");
var wrench = require('wrench');
var fs = require('fs');

var a = new ShowBuilder();
a.createStaticPages();

var b = new PerformerBuilder();
b.createStaticPages();


var eventObj = festivalData.getEventObject();
var rootPath = "./event/";
wrench.rmdirSyncRecursive("./event", true);
fs.mkdirSync("./event");

for (var key in eventObj) {
  var fileName = util.convertToSlug(eventObj[key].Name);
  var dirPath = rootPath + eventObj[key].pageUrl;
  var filePath = dirPath + "/index.html";

  fs.mkdirSync(dirPath);
  fs.openSync(filePath, 'w');

  fs.appendFileSync(filePath, "---\n");
  fs.appendFileSync(filePath, "layout: page\n");
  fs.appendFileSync(filePath, "title: \"" + escapeDoubleQuotes(eventObj[key].Name) + "\"\n");
  fs.appendFileSync(filePath, "category: event \n");
  fs.appendFileSync(filePath, "---\n\n");

  fs.appendFileSync(filePath, "");
}


var venueObj = festivalData.getVenueObject();
var rootPath = "./venue/";
wrench.rmdirSyncRecursive("./venue", true);
fs.mkdirSync("./venue");

for (var key in venueObj) {
  var fileName = util.convertToSlug(venueObj[key].Name);
  var dirPath = rootPath + venueObj[key].pageUrl;
  var filePath = dirPath + "/index.html";

  fs.mkdirSync(dirPath);
  fs.openSync(filePath, 'w');

  fs.appendFileSync(filePath, "---\n");
  fs.appendFileSync(filePath, "layout: page\n");
  fs.appendFileSync(filePath, "title: \"" + venueObj[key].Name + "\"\n");
  fs.appendFileSync(filePath, "category: venue \n");
  fs.appendFileSync(filePath, "---\n\n");

  fs.appendFileSync(filePath, "Blah Blah Blah");
}



function escapeDoubleQuotes(str) {
  return str.replace(/\\([\s\S])|(")/g, "\\$1$2"); // thanks @slevithan!
}



