const fs = require('fs');
const util = require('./utilities');
const festivalData = require('./festival-data');
const wrench = require('wrench');

const ObjectBuilder = require('./object-builder');

const ShowBuilder = ObjectBuilder.extend({
  WHITELISTED_ATTRIBUTES: [
    'id',
    'shows',
    'events',
    'name',
    'photoUrl',
    'sortOrder',
    'bio',
    'copy',
    'pageUrl',
    'iTunesUrl'
  ],

  MODEL_NAME: 'show',
  TMP_PATH: festivalData.tmpShowsPath,
  API_PATH: '../api/shows.json',

  normalizeData: function() {
    const showObj = festivalData.getShowObject();
    for (var key in showObj) {
      showObj[key].id = Number(showObj[key].SubmittedId);
      showObj[key].name = showObj[key].Name;
      showObj[key].bio = showObj[key].Bio;
      showObj[key].copy = showObj[key].Copy;
      showObj[key].sortOrder = Number(showObj[key].SortOrder) || 9999;
      showObj[key].iTunesUrl = showObj[key]['iTunes Url'];
      showObj[key].pageUrl = showObj[key].id + '-' + util.convertToSlug(showObj[key].name);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(showObj, null, ' '), 'utf8');
  },

  addRelationships: function() {
    const showObj = festivalData.getShowObject();

    for (var key in showObj) {
      showObj[key].events = festivalData.getEventsForShow(showObj[key].id);
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(showObj, null, ' '), 'utf8');
  },

  createStaticPages: function() {
    const showObj = festivalData.getShowObject();
    const rootPath = '../show/';
    wrench.rmdirSyncRecursive('../show', true);
    fs.mkdirSync('../show');

    for (var key in showObj) {
      var dirPath = rootPath + showObj[key].pageUrl;
      var filePath = dirPath + '/index.html';

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.openSync(filePath, 'w');
      process.stdout.write('.');
      fs.appendFileSync(filePath, '---\n');
      fs.appendFileSync(filePath, 'layout: page\n');
      fs.appendFileSync(filePath, 'title: \'' + showObj[key].name + '\'\n');
      fs.appendFileSync(filePath, 'category: show \n');
      fs.appendFileSync(filePath, 'featuredimage: \'/img/show-images/show-' + util.cleanStr(showObj[key].name) + '-300x300.jpg\'\n');
      fs.appendFileSync(filePath, '---\n\n');

      fs.appendFileSync(filePath, util.htmlToText(showObj[key].bio));
    }
    var message = '\n' + showObj.length + ' show pages created\n';
    console.log(message);
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

