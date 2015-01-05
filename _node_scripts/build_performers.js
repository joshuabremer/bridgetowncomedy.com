var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require("node-smushit");
var util = require( "./utilities" );
var festivalData = require( "./festival-data" );

TMP_PERFORMERS_PATH = festivalData.tmpPerformersPath;

module.exports = processPerformerData;

function processPerformerData() {
  normalizePerformerData( TMP_PERFORMERS_PATH );
  addEventIds( TMP_PERFORMERS_PATH );
  writePerformersToFixtures();
  console.log("Finished: " + "./scripts/fixtures/performer.js");
  //buildImages( TMP_PERFORMERS_PATH ,"performer");
}

function addEventIds(filepath) {
  var performerObj = festivalData.getPerformerObject();
  var scheduleObj = festivalData.getScheduleObject();

  for (var key in performerObj) {
    performerObj[key].events = getEventsForPerformer(performerObj[key].id)
    performerObj[key].mc_events = getMCEventsForPerformer(performerObj[key].id)
  }
  fs.writeFileSync(filepath, JSON.stringify(performerObj, null, " "), "utf8");
}

function getEventsForPerformer( id ) {
  var scheduleObj = festivalData.getScheduleObject();
  var returnArray = [];
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].PerformerId,10);
    if (idCheck === parseInt(id,10) && doesEventExistForId(scheduleObj[key].EventId)) {
      returnArray.push(scheduleObj[key].EventId);
    }
  }
  return returnArray;
}

function getMCEventsForPerformer( id ) {
  var eventObj = festivalData.getEventObject();
  var returnArray = [];
  for ( var key in eventObj ) {
    var idCheck = parseInt(eventObj[key].MCId,10);
    if (idCheck === parseInt(id,10) && doesEventExistForId(eventObj[key].EventId)) {
      returnArray.push(eventObj[key].EventId);
    }
  }
  return returnArray;
}

function doesEventExistForId( id ) {
  var eventObj = festivalData.getEventObject();
  id = parseInt(id,10);
  for ( var key in eventObj ) {
    var eventId = parseInt(eventObj[key].id,10);

    if ( eventId === id ) {
      return true;
    }
  }
  return false;
}

function normalizePerformerData(filepath) {
  var performerObj = festivalData.getPerformerObject();
  for (var key in performerObj) {
    performerObj[key].id = performerObj[key].PerformerId;

    // Create page URLs
    performerObj[key].pageUrl = performerObj[key].id + "-" + util.convertToSlug(performerObj[key].Name);
    performerObj[key].ExcludeFromList = (performerObj[key].ExcludeFromList === "Yes" ? true : false);
    performerObj[key].Bio = performerObj[key].Bio || "";
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2028/g, "");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2018/g, "&#x2018;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2019/g, "&#x2019;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201c/g, "&#x201c;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2033/g, "&#x2033;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201d/g, "&#x201d;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00a0/g, " ");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2026/g, "&#x2026;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2013/g, "&#x2013;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2014/g, "&#x2014;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e9/g, "&#x00e9;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e1/g, "&#x00e1;");


    performerObj[key].SortOrder = parseInt(performerObj[key].SortOrder,10) || 99999;

  }

  performerObj = util.sortArray(performerObj,"SortOrder");

  fs.writeFileSync(filepath, JSON.stringify(performerObj, null, " "), "utf8");
}

function buildImages(path,prefix) {
  fs.mkdir("tmp", function() {});
  fs.readFile(path, "utf8", function(err,data) {
      var items = JSON.parse(data);
      items.forEach(function(item) {
        buildImageFromURL(item.Name,item.PhotoUrl,prefix);
      });
  });
}

function buildImageFromURL(name,url,prefix) {
  var filename = url.replace(/^.*[\\\/]/, "");
  var file = fs.createWriteStream("tmp/" + filename);
  var request = http.get(url, function(response) {
    console.log("Created: " + "tmp/" + filename);
    response.pipe(file);
    response.on("end", function () {
      buildThumbnail("tmp/" + filename, "assets/" + prefix + "-" + util.cleanStr(name) + "-300x300.jpg");
    });
  });
  request.on("error", function(e) {
    console.log("Got error: " + e.message);
  });
}

function buildThumbnail(imgSrc, imgDest, fill) {
  fill = fill || false;
  easyimg.thumbnail(
    {
     src: imgSrc,
     dst: imgDest,
     width:300, height:300,
     x:0, y:0,
     fill: fill
     },
    function(err, image) {
     if (err) {
      console.log("Error resizing: " + imgSrc);
      return;
     }
     //smushit.smushit(imgDest);
     console.log("Resized and cropped: " + image.width + " x " + image.height + " | " + imgDest);
     // fs.unlink(imgSrc, function() {
     //  console.log("Deleted tmp file: " + imgSrc);
     // });
    }
  );
}

function writePerformersToFixtures() {
  fs.writeFileSync( "scripts/fixtures/performer.js","/*jshint -W100 */\nApp.Performer.FIXTURES = ","utf8" );
  fs.appendFileSync( "scripts/fixtures/performer.js", festivalData.getPerformerData(),{encoding:"utf8" });
  fs.appendFileSync( "scripts/fixtures/performer.js",";");
}


