var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require("node-smushit");
var util = require( "./utilities" );
var festivalData = require( "./festival-data" );
var wrench = require('wrench');
var ObjectBuilder = require( "./object_builder" );

var showBuilder = new ObjectBuilder({
  TMP_PATH: festivalData.tmpShowsPath,
  FIXTURES_PATH: "./scripts/fixtures/show.js"
});

// module.exports = processShowData;

showBuilder.buildFixtures();



