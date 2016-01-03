const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const ObjectBuilder = require('./object-builder');

const VENUE_ADDRESSES = {
  10373: '830 E. Burnside St., Portland, OR',
  10374: '722 E Burnside, Portland, OR',
  10384: 'Suite #110, 1300 SE Stark St, Portland, OR',
  10375: '111 N.E. 11th Avenue (at N.E. Couch Street), Portland, OR',
  10377: '315 SE 3rd Ave, Portland, OR',
  10376: '315 SE 3rd Ave, Portland, OR',
  10378: '1028 SE Water, Portland, OR',
  10379: '523 SE Grand Ave 97214',
  10380: '910 E Burnside St, Portland, OR',
  10763: '345 SE Taylor St, Portland, OR 97214',
  10677: '900 SE Salmon St, Portland, OR 97214'
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








