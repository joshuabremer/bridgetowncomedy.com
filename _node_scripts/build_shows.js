var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require("node-smushit");
var util = require( "./utilities" );
var festivalData = require( "./festival-data" );
var wrench = require('wrench');
var ObjectBuilder = require( "./object_builder" );

var ShowBuilder;

ShowBuilder = ObjectBuilder.extend({
  TMP_PATH: festivalData.tmpShowsPath,
  FIXTURES_PATH: "./scripts/fixtures/show.js",

  normalizeData: function() {
    var showObj = festivalData.getShowObject();
    for (var key in showObj) {
      showObj[key].id = showObj[key].SubmittedId;
      showObj[key].pageUrl = showObj[key].id + "-" + util.convertToSlug(showObj[key].Name);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(showObj, null, " "), "utf8");
  },

  addRelationships: function() {
    var showObj = festivalData.getShowObject();
    var eventObj = festivalData.getEventData();

    for (var key in showObj) {
      showObj[key].events = festivalData.getEventsForShow(showObj[key].id)
    }
    fs.writeFileSync( this.TMP_PATH, JSON.stringify(showObj, null, " "), "utf8");
  },

  writeToFixtureFile: function() {
    fs.writeFileSync( this.FIXTURES_PATH ,"/*jshint -W100 */\nApp.Show.FIXTURES = ","utf8");
    fs.appendFileSync( this.FIXTURES_PATH ,festivalData.getShowData(),{encoding:"utf8"});
    fs.appendFileSync( this.FIXTURES_PATH ,";");
  },

  createStaticPages: function() {
    var showObj = festivalData.getShowObject();
    var rootPath = "./show/";
    wrench.rmdirSyncRecursive( "./show", true );
    fs.mkdirSync( "./show" );

    for ( var key in showObj ) {
      var fileName = util.convertToSlug( showObj[key].Name );
      var dirPath = rootPath + showObj[key].pageUrl;
      var filePath = dirPath + "/index.html";

      fs.mkdirSync( dirPath );
      fs.openSync( filePath, "w");

      fs.appendFileSync( filePath, "---\n");
      fs.appendFileSync( filePath, "layout: page\n");
      fs.appendFileSync( filePath, "title: \"" + showObj[key].Name + "\"\n");
      fs.appendFileSync( filePath, "category: show \n");
      fs.appendFileSync( filePath, "featuredimage: \"/img/show-images/show-" + util.cleanStr(showObj[key].Name) + "-300x300.jpg\"\n");
      fs.appendFileSync( filePath, "---\n\n");

      fs.appendFileSync( filePath, util.htmlToText(showObj[key].Bio));
    }
  }
});

module.exports = ShowBuilder;



