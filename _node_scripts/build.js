var ShowBuilder = require( "./../bridgetown-ember/_node_scripts/build_shows");
var buildEvents = require( "./../bridgetown-ember/_node_scripts/build_events");
var buildVenues = require( "./../bridgetown-ember/_node_scripts/build_venues");
var PerformerBuilder = require( "./../bridgetown-ember/_node_scripts/build_performers");
var festivalData = require( "./../bridgetown-ember/_node_scripts/festival-data" );
var Q = require( "q" );
var util = require( "./../bridgetown-ember/_node_scripts/utilities" );

var a = new ShowBuilder();
a.createStaticPages();

var b = new PerformerBuilder();
b.createStaticPages();




