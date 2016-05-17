const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const ObjectBuilder = require('./object-builder');
const wrench = require('wrench');

const VENUE_ADDRESSES = {
  10763: "345 SE Taylor St, Portland, OR 97214",
  10377: "315 SE 3rd Ave, Portland, OR",
  10380: "910 E Burnside St, Portland, OR",
  12605: "722 E Burnside Street, Portland, OR 97214",
  10378: "1028 SE Water Street, Portland, OR 97214",
  10373: "830 E Burnside Street, Portland, OR 97214",
  10379: "523 SE Grand Ave 97214",
  12478: "116 SE Yamhill St, Portland, OR 97217",
  10384: "Suite #110, 1300 SE Stark St, Portland, OR",
  10376: "315 SE 3rd Ave, Portland, OR",
  12533: "909 E Burnside St, Portland, OR 97214"
};

module.exports = ObjectBuilder.extend({
  WHITELISTED_ATTRIBUTES: [
    'id',
    'venues',
    'events',
    'name',
    'address',
    'pageUrl'
  ],
  MODEL_NAME: 'venue',
  TMP_PATH: festivalData.tmpVenuesPath,
  API_PATH: '../api/venues.json',

  normalizeData: function() {
    var venueObj = festivalData.getVenueObject();

    for (var key in venueObj) {
      venueObj[key].id = Number(venueObj[key].VenueId);
      venueObj[key].name = venueObj[key].Name;
      if (VENUE_ADDRESSES[venueObj[key].id]) {
        venueObj[key].address = VENUE_ADDRESSES[venueObj[key].id];
      }
      venueObj[key].pageUrl = venueObj[key].id + '-' + util.convertToSlug(venueObj[key].Name);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(venueObj, null, ' '), 'utf8');
  },

  addRelationships: function() {
    var venueObj = festivalData.getVenueObject();

    for (var key in venueObj) {
      venueObj[key].events = getEventsForVenue(venueObj[key].id);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(venueObj, null, ' '), 'utf8');
  },

  createStaticPages: function() {
    var venueObj = festivalData.getVenueObject();
    var rootPath = '../venue/';
    wrench.rmdirSyncRecursive('../venue', true);
    fs.mkdirSync('../venue');

    for (var key in venueObj) {
      var dirPath = rootPath + venueObj[key].pageUrl;
      var filePath = dirPath + '/index.html';

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.openSync(filePath, 'w');
      process.stdout.write('.');
      fs.appendFileSync(filePath, '---\n');
      fs.appendFileSync(filePath, 'layout: page\n');
      fs.appendFileSync(filePath, 'title: "' + venueObj[key].name + '"\n');
      fs.appendFileSync(filePath, 'category: venue \n');
      fs.appendFileSync(filePath, '---\n\n');

    }

    var message = '\n' + venueObj.length + ' event pages created\n';
    console.log(message);
  }
});

function getEventsForVenue(id) {
  var eventObj = festivalData.getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].venue, 10);
    if (idCheck === parseInt(id, 10) && festivalData.doesEventExistForId(eventObj[key].id)) {
      returnArray.push(eventObj[key].id);
    }
  }
  return returnArray;
}








