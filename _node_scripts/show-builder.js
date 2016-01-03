const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const wrench = require('wrench');

const ObjectBuilder = require('./object-builder');

const ShowBuilder = ObjectBuilder.extend({
  WHITELISTED_ATTRIBUTES: [
    'events',
    'name',
    'photoUrl',
    'sortOrder',
    'bio',
    'copy',
    'pageUrl',
    'iTunesUrl'
  ],

  TMP_PATH: festivalData.tmpShowsPath,
  API_PATH: '../api/shows.json',

  normalizeData: function() {
    var showObj = festivalData.getShowObject();
    for (var key in showObj) {
      showObj[key].id = showObj[key].SubmittedId;
      showObj[key].pageUrl = showObj[key].id + '-' + util.convertToSlug(showObj[key].name);
      showObj[key].SortOrder = showObj[key].Position;
      showObj[key].SortOrder = parseInt(showObj[key].SortOrder, 10) || 99999;
      showObj[key].iTunesUrl = showObj[key]['iTunes Url'];

    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(showObj, this.WHITELISTED_ATTRIBUTES, ' '), 'utf8');
  },

  addRelationships: function() {
    var showObj = festivalData.getShowObject();

    for (var key in showObj) {
      showObj[key].events = festivalData.getEventsForShow(showObj[key].id);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(showObj, null, ' '), 'utf8');
  },

  writeToFixtureFile: function() {
    const showData = {shows: festivalData.getShowObject()};
    fs.writeFileSync(this.API_PATH, JSON.stringify(showData, null, 2), 'utf8');
  },

  createStaticPages: function() {
    var showObj = festivalData.getShowObject();
    var rootPath = './show/';
    wrench.rmdirSyncRecursive('./show', true);
    fs.mkdirSync('./show');

    for (var key in showObj) {
      var dirPath = rootPath + showObj[key].pageUrl;
      var filePath = dirPath + '/index.html';

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.openSync(filePath, 'w');
      process.stdout.write('.'.green);
      fs.appendFileSync(filePath, '---\n');
      fs.appendFileSync(filePath, 'layout: page\n');
      fs.appendFileSync(filePath, 'title: \'' + showObj[key].Name + '\'\n');
      fs.appendFileSync(filePath, 'category: show \n');
      fs.appendFileSync(filePath, 'featuredimage: \'/img/show-images/show-' + util.cleanStr(showObj[key].Name) + '-300x300.jpg\'\n');
      fs.appendFileSync(filePath, '---\n\n');

      fs.appendFileSync(filePath, util.htmlToText(showObj[key].Bio));
    }
    var message = '\n' + showObj.length + ' show pages created\n';
    console.log(message.green);
  },

  createHeadshots: function() {
    // var showObj = festivalData.getShowObject();

    // for (var key in showObj) {
      //var item = showObj[key];
      // this.buildImageFromURLIfUpdated(item.Name, item.PhotoUrl, 'show')
    // }
  }
});

module.exports = ShowBuilder;

