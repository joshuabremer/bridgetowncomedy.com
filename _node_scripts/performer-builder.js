const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const wrench = require('wrench');
const ObjectBuilder = require('./object-builder');


module.exports = ObjectBuilder.extend({
  WHITELISTED_ATTRIBUTES: [
    'id',
    'performers',
    'events',
    'emceeEvents',
    'name',
    'twitter',
    'website',
    'originalPhotoUrl',
    'photoUrl',
    'sortOrder',
    'excludeFromList',
    'bio',
    'pageUrl'
  ],
  MODEL_NAME: 'performer',
  TMP_PATH: festivalData.tmpPerformersPath,
  API_PATH: '../api/performers.json',

  normalizeData: function() {
    var key,
      performerObj = festivalData.getPerformerObject();


    for (key in performerObj) {
      // Delete PLACE HOLDER
      if (performerObj[key].Name === 'PLACE HOLDER') {
        var index = performerObj.indexOf(performerObj[key]);
        if (index > -1) {
          performerObj.splice(index, 1);
        }
        continue;
      }
    }

    for (key in performerObj) {
      performerObj[key].id = Number(performerObj[key].PerformerId);
      performerObj[key].name = performerObj[key].Name;
      performerObj[key].twitter = performerObj[key].Twitter || '';
      performerObj[key].bio = performerObj[key].Bio;
      performerObj[key].website = performerObj[key].Website;
      performerObj[key].originalPhotoUrl = performerObj[key].PhotoUrl;
      performerObj[key].photoUrl = '/api/img/' + this.MODEL_NAME + '-images/' + this.MODEL_NAME + '-' + util.cleanStr(performerObj[key].Name) + '-300x300.jpg';

      // Create page URLs
      performerObj[key].pageUrl = performerObj[key].id + '-' + util.convertToSlug(performerObj[key].name);
      performerObj[key].excludeFromList = (performerObj[key]['Exclude from list'] === 'true' ? true : false);


      performerObj[key].bio = performerObj[key].bio.replace(/\\u2028/g, '');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u2018/g, '&#x2018;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u2019/g, '&#x2019;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u201c/g, '&#x201c;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u2033/g, '&#x2033;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u201d/g, '&#x201d;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u00a0/g, ' ');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u2026/g, '&#x2026;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u2013/g, '&#x2013;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u2014/g, '&#x2014;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u00e9/g, '&#x00e9;');
      performerObj[key].bio = performerObj[key].bio.replace(/\\u00e1/g, '&#x00e1;');
      performerObj[key].sortOrder = Number(performerObj[key].Position) || 99999;
      performerObj[key].twitter = performerObj[key].twitter.replace('@', '');


    }

    performerObj = util.sortArray(performerObj, 'SortOrder');

    fs.writeFileSync(this.TMP_PATH, JSON.stringify(performerObj, null, ' '), 'utf8');
  },

  addRelationships: function() {
    var performerObj = festivalData.getPerformerObject();

    for (var key in performerObj) {
      performerObj[key].events = festivalData.getEventsForPerformer(performerObj[key].id);
      performerObj[key].emceeEvents = festivalData.getMCEventsForPerformer(performerObj[key].id);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(performerObj, null, ' '), 'utf8');
  },

  createHeadshots: function() {
    var performerObj = festivalData.getPerformerObject();

    for (var key in performerObj) {
      var item = performerObj[key];
      this.buildImageFromURLIfUpdated(item.name, item.originalPhotoUrl, this.MODEL_NAME )
    }
  },

  createStaticPages: function() {
    var performerObj = festivalData.getPerformerObject();
    var rootPath = '../performer/';
    wrench.rmdirSyncRecursive('../performer', true);
    fs.mkdirSync('../performer');

    for (var key in performerObj) {
      var dirPath = rootPath + performerObj[key].pageUrl;
      var filePath = dirPath + '/index.html';

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.openSync(filePath, 'w');
      process.stdout.write('.');
      fs.appendFileSync(filePath, '---\n');
      fs.appendFileSync(filePath, 'layout: page\n');
      fs.appendFileSync(filePath, 'title: "' + performerObj[key].name + '"\n');
      fs.appendFileSync(filePath, 'category: performer \n');
      fs.appendFileSync(filePath, 'featuredimage: "/api/img/performer-images/performer-' + util.cleanStr(performerObj[key].name) + '-300x300.jpg"\n');
      fs.appendFileSync(filePath, '---\n\n');

      fs.appendFileSync(filePath, util.htmlToText(performerObj[key].bio));
    }

    var message = '\n' + performerObj.length + ' performer pages created\n';
    console.log(message);
  }
});

