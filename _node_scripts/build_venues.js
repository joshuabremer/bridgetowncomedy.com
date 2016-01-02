const fs = require('fs');
const festivalData = require('./festival-data');
const util = require('./utilities');
const wrench = require('wrench');

const TMP_VENUES_PATH = festivalData.tmpVenuesPath;
const API_PATH = '../api/venues.json';
process.chdir('.');

module.exports = processVenueData;

const addresses = {
  '10373': {
    'Address': '830 E. Burnside St., Portland, OR'
  },
  '10374': {
    'Address': '722 E Burnside, Portland, OR'
  },
  '10384': {
    'Address': 'Suite #110, 1300 SE Stark St, Portland, OR'
  },
  '10375': {
    'Address': '111 N.E. 11th Avenue (at N.E. Couch Street), Portland, OR'
  },
  '10377': {
    'Address': '315 SE 3rd Ave, Portland, OR'
  },
  '10376': {
    'Address': '315 SE 3rd Ave, Portland, OR'
  },
  '10378': {
    'Address': '1028 SE Water, Portland, OR'
  },
  '10379': {
    'Address': '523 SE Grand Ave 97214'
  },
  '10380': {
    'Address': '910 E Burnside St, Portland, OR'
  },
  '10763': {
    'Address': '345 SE Taylor St, Portland, OR 97214'
  },
  '10677': {
    'Address': '900 SE Salmon St, Portland, OR 97214'
  }
};


function processVenueData() {
  normalizeVenueData();
  addEventIds();

  const venueData = {venues: festivalData.getVenueObject()};

  fs.writeFileSync(API_PATH, JSON.stringify(venueData, null, 2), 'utf8');

  console.log('Finished: ' + API_PATH);
}

// function createVenuePages() {
//   var venueObj = festivalData.getVenueObject();
//   var rootPath = './venue/';
//   wrench.rmdirSyncRecursive( './venue', true );
//   fs.mkdirSync( './venue' );

//   for ( var key in venueObj ) {
//     var fileName = util.convertToSlug( venueObj[key].Name );
//     var dirPath = rootPath + venueObj[key].pageUrl;
//     var filePath = dirPath + '/index.html';

//     fs.mkdirSync( dirPath );
//     fs.openSync( filePath, 'w');

//     fs.appendFileSync( filePath, '---\n');
//     fs.appendFileSync( filePath, 'layout: page\n');
//     fs.appendFileSync( filePath, 'title: \' + venueObj[key].Name + '\'\n');
//     fs.appendFileSync( filePath, 'category: venue \n');
//     fs.appendFileSync( filePath, '---\n\n');

//     fs.appendFileSync( filePath, 'Blah Blah Blah');
//   }
// }


function addEventIds() {
  var venueObj = festivalData.getVenueObject();

  for (var key in venueObj) {
    venueObj[key].events = getEventsForVenue(venueObj[key].id)
  }
  fs.writeFileSync(TMP_VENUES_PATH, JSON.stringify(venueObj, null, ' '), 'utf8');
}

function getEventsForVenue(id) {
  var venueObj = festivalData.getVenueObject();
  var eventObj = festivalData.getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].VenueId, 10);
    if (idCheck === parseInt(id, 10) && festivalData.doesEventExistForId(eventObj[key].EventId)) {
      returnArray.push(eventObj[key].EventId);
    }
  }
  return returnArray;
}


function normalizeVenueData() {
  var venueObj = festivalData.getVenueObject();

  for (var key in venueObj) {
    venueObj[key].id = venueObj[key].VenueId;
    if (addresses[venueObj[key].id]) {
      venueObj[key].address = addresses[venueObj[key].id].Address;
    }
    venueObj[key].pageUrl = venueObj[key].id + '-' + util.convertToSlug(venueObj[key].Name);
  }
  fs.writeFileSync(TMP_VENUES_PATH, JSON.stringify(venueObj, null, ' '), 'utf8');
}






