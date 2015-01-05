var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require("node-smushit");
var util = require( "./utilities" );
var festivalData = require( "./festival-data" );
var wrench = require('wrench');

TMP_SHOWS_PATH = festivalData.tmpShowsPath;

module.exports = processShowData;

function processShowData() {
  replaceSubmittedIdWithId( TMP_SHOWS_PATH );
  createPageUrls( TMP_SHOWS_PATH );
  addEventIds( TMP_SHOWS_PATH );
  writeShowsToFixtures();
  createShowPages();
  console.log("Finished: ./scripts/fixtures/show.js")
}

function createShowPages() {
  var showObj = festivalData.getShowObject();
  var rootPath = "./show/";
  wrench.rmdirSyncRecursive( "./show", true );
  fs.mkdirSync( "./show" );

  for ( var key in showObj ) {
    var fileName = util.convertToSlug( showObj[key].Name );
    var dirPath = rootPath + showObj[key].pageUrl;
    var filePath = dirPath + "/index.html";

    fs.mkdirSync( dirPath );
    fs.openSync( filePath, 'w');

    fs.appendFileSync( filePath, "---\n");
    fs.appendFileSync( filePath, "layout: page\n");
    fs.appendFileSync( filePath, "title: \"" + showObj[key].Name + "\"\n");
    fs.appendFileSync( filePath, "category: show \n");
    fs.appendFileSync( filePath, "---\n\n");

    fs.appendFileSync( filePath, "Blah Blah Blah");
  }
}

function writeShowsToFixtures() {
  fs.writeFileSync("./scripts/fixtures/show.js","/*jshint -W100 */\nApp.Show.FIXTURES = ",'utf8');
  fs.appendFileSync("./scripts/fixtures/show.js",festivalData.getShowData(),{encoding:'utf8'});
  fs.appendFileSync("./scripts/fixtures/show.js",";");
}

function createPageUrls(filepath) {
  var showObj = festivalData.getShowObject();
  for (var key in showObj) {
    showObj[key].pageUrl = showObj[key].id + '-' + util.convertToSlug(showObj[key].Name);
  }
  fs.writeFileSync(filepath, JSON.stringify(showObj, null, " "), 'utf8');
}

function replaceSubmittedIdWithId(filepath) {
  var showObj = festivalData.getShowObject();
  for (var key in showObj) {
    showObj[key].id = showObj[key].SubmittedId;
  }
  fs.writeFileSync(filepath, JSON.stringify(showObj, null, " "), 'utf8');
}

function addEventIds(filepath) {
  var showObj = festivalData.getShowObject();
  var eventObj = festivalData.getEventData();

  for (var key in showObj) {
    showObj[key].events = getEventsForShow(showObj[key].id)
  }
  fs.writeFileSync(filepath, JSON.stringify(showObj, null, " "), 'utf8');
}

function getEventsForShow(id) {
  var eventObj = festivalData.getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].ShowId,10);
    if (idCheck === parseInt(id,10)) {
      returnArray.push(eventObj[key].id);
    }
  }
  return returnArray;
}

function buildImages(path,prefix) {
  fs.mkdir('tmp', function() {});
  fs.readFile(path, 'utf8', function(err, data) {
      var items = JSON.parse(data);
      items.forEach(function(item) {
        buildImageFromURL(item.Name, item.PhotoUrl, prefix);
      });
  });
}

function buildImageFromURL(name,url,prefix) {
  var filename = url.replace(/^.*[\\\/]/, '');
  var file = fs.createWriteStream("tmp/" + filename);
  var request = http.get(url, function(response) {
    console.log("Created: " + "tmp/" + filename);
    response.pipe(file);
    response.on('end', function () {
      buildThumbnail("tmp/" + filename, "assets/" + prefix + "-" + util.cleanStr(name) + "-300x300.jpg");
    });
  });
  request.on('error', function(e) {
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


