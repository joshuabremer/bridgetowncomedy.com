var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require("node-smushit");
var util = require( "./utilities" );
var festivalData = require( "./festival-data" );
var wrench = require("wrench");
var Class = require("./class_inheritance.js");

var ObjectBuilder = Class.extend({
  TMP_PATH: null,
  FIXTURES_PATH: null,

  buildFixtures: function() {
    this.normalizeData();
    this.addRelationships();
    this.writeToFixtureFile();
    this.createStaticPages();
    console.log( "Finished: " + this.FIXTURES_PATH );
  },

  normalizeData: function(filepath) {
    // Override this...
  },

  addRelationships: function(filepath) {
    // Override this...
  },

  writeToFixtureFile: function() {
   // Override this...
  },

  createStaticPages: function() {
    // Override this...
  }
});

module.exports = ObjectBuilder;