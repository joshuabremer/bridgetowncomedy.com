var http = require("http");
var exec = require('child_process').exec;
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require("node-smushit");
var util = require( "./utilities" );
var festivalData = require( "./festival-data" );
var wrench = require('wrench');
var ObjectBuilder = require( "./object_builder" );
var colors = require('colors');

var ShowBuilder;

PerformerBuilder = ObjectBuilder.extend({
  TMP_PATH: festivalData.tmpPerformersPath,
  FIXTURES_PATH: "./scripts/performer.js",

  normalizeData: function() {
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
      performerObj[key].SortOrder = performerObj[key].Position;


      performerObj[key].Twitter = performerObj[key].Twitter.replace("@", "");

      performerObj[key].SortOrder = parseInt(performerObj[key].SortOrder,10) || 99999;
    }

    performerObj = util.sortArray(performerObj,"SortOrder");

    fs.writeFileSync(this.TMP_PATH, JSON.stringify(performerObj, null, " "), "utf8");
  },

  addRelationships: function() {
    var performerObj = festivalData.getPerformerObject();
    var scheduleObj = festivalData.getScheduleObject();

    for (var key in performerObj) {
      performerObj[key].events = festivalData.getEventsForPerformer(performerObj[key].id)
      performerObj[key].mc_events = festivalData.getMCEventsForPerformer(performerObj[key].id)
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(performerObj, null, " "), "utf8");
  },

  writeToFixtureFile: function() {
    fs.writeFileSync( this.FIXTURES_PATH,"/*jshint -W100 */\nApp.Performer.FIXTURES = ","utf8" );
    fs.appendFileSync( this.FIXTURES_PATH, festivalData.getPerformerData(),{encoding:"utf8" });
    fs.appendFileSync( this.FIXTURES_PATH,";");
  },

  createStaticPages: function() {
    var performerObj = festivalData.getPerformerObject();
    var rootPath = "./performer/";
    wrench.rmdirSyncRecursive( "./performer", true );
    fs.mkdirSync( "./performer" );

    for ( var key in performerObj ) {
      var fileName = util.convertToSlug( performerObj[key].Name );
      var dirPath = rootPath + performerObj[key].pageUrl;
      var filePath = dirPath + "/index.html";

      if (!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath);
      }
      fs.openSync( filePath, 'w');

      fs.appendFileSync( filePath, "---\n");
      fs.appendFileSync( filePath, "layout: page\n");
      fs.appendFileSync( filePath, "title: \"" + performerObj[key].Name + "\"\n");
      fs.appendFileSync( filePath, "category: performer \n");
      fs.appendFileSync( filePath, "featuredimage: \"/img/performer-images/performer-" + util.cleanStr(performerObj[key].Name) + "-300x300.jpg\"\n");
      fs.appendFileSync( filePath, "---\n\n");

      fs.appendFileSync( filePath, util.htmlToText(performerObj[key].Bio));
    }
  },

  createHeadshots: function() {
    var performerObj = festivalData.getPerformerObject();

    for ( var key in performerObj ) {
      var item = performerObj[key];
      this.buildImageFromURL ( item.Name, item.PhotoUrl, "performer" )
    }
     // curl -z tmp/aaronweaver.jpg http://localhost:4000/img/performer-images/performer-aaronweaver-300x300.jpg -o tmp/aaronweaver.jpg
  },

  buildImageFromURL: function ( name, url, prefix ) {
    var _this = this;
    var filename = url.replace(/^.*[\\\/]/, "");

    var _this = this;
    var filename = url.replace(/^.*[\\\/]/, "");
    var file = fs.createWriteStream("tmp/" + filename);

    var request = http.get(url, function(response) {
      //console.log("Created: " + "tmp/" + filename);
      response.pipe(file);
      response.on("end", function () {
        _this.buildThumbnail("tmp/" + filename, "img/performer-images/" + prefix + "-" + util.cleanStr(name) + "-300x300.jpg");
      });
    });
    request.on("error", function(e) {
      var errMsg = "Got error: " + e.message;
      console.log(errMsg.red);
    });
    // console.log('curl -z tmp/' + filename + ' ' + url + ' -o tmp/' + filename)
    // exec('curl -z tmp/' + filename + ' ' + url + ' -o tmp/' + filename,
    //   function (error, stdout, stderr) {
    //     if (error !== null) {
    //       console.log('exec error: ' + error);
    //       return;
    //     }
    //     // If the file is new, make new images
    //     if ( stderr.indexOf("--:--:-- --:--:-- --:--:--") === -1 ) {
    //       _this.buildThumbnail("tmp/" + filename, "img/performer-images/" + prefix + "-" + util.cleanStr(name) + "-300x300.jpg");
    //     }
    // });
  },

  buildThumbnail: function ( imgSrc, imgDest, fill ) {
    //console.log( imgSrc, imgDest, fill)
    fill = fill || false;
    easyimg.convert({ src: imgSrc, dst: imgDest, quality: 80 }, function (file) {
      easyimg.thumbnail(
        {
          src: imgDest,
          dst: imgDest,
          width: 300,
          height: 300,
          x: 0,
          y: 0,
          fill: fill
        },
        function(err, image) {
         if (err) {
          var errMsg = "Error resizing: " + imgDest;
          console.log(errMsg.red);
          return;
         }
         //smushit.smushit(imgDest);
         //console.log("Resized and cropped: " + image.width + " x " + image.height + " | " + imgDest);
         // fs.unlink(imgSrc, function() {
         //  console.log("Deleted tmp file: " + imgSrc);
         // });
      });
    });
  }
});

module.exports = PerformerBuilder;


