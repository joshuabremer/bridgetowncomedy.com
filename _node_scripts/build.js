var ShowBuilder = require( "./build_shows");
var buildEvents = require( "./build_events");
var buildVenues = require( "./build_venues");
var PerformerBuilder = require( "./build_performers");
var festivalData = require( "./festival-data" );
var Q = require( "q" );
var util = require( "./utilities" );

var a = new ShowBuilder();
a.createStaticPages();

var b = new PerformerBuilder();
b.createStaticPages();




