var http = require('http');
var exec = require('child_process').exec;
var fs = require('fs');
var easyimg = require('easyimage');
var smushit = require('node-smushit');
var util = require('./utilities');
var festivalData = require('./festival-data');
var wrench = require('wrench');
var ObjectBuilder = require('./object_builder');
var colors = require('colors');


PerformerBuilder = ObjectBuilder.extend({
  TMP_PATH: festivalData.tmpPerformersPath,
  API_PATH: '../api/performers.json',

  normalizeData: function() {
    var performerObj = festivalData.getPerformerObject();


    for (var key in performerObj) {
      // Delete PLACE HOLDER
      if (performerObj[key].Name === 'PLACE HOLDER') {
        var index = performerObj.indexOf(performerObj[key]);
        if (index > -1) {
          performerObj.splice(index, 1);
        }
        continue;
      }
    }

    for (var key in performerObj) {
      performerObj[key].id = performerObj[key].PerformerId;

      // Create page URLs
      performerObj[key].pageUrl = performerObj[key].id + '-' + util.convertToSlug(performerObj[key].name);
      performerObj[key].ExcludeFromList = (performerObj[key].ExcludeFromList === 'Yes' ? true : false);
      performerObj[key].Bio = performerObj[key].Bio || '';
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2028/g, '');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2018/g, '&#x2018;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2019/g, '&#x2019;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201c/g, '&#x201c;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2033/g, '&#x2033;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201d/g, '&#x201d;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00a0/g, ' ');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2026/g, '&#x2026;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2013/g, '&#x2013;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2014/g, '&#x2014;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e9/g, '&#x00e9;');
      performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e1/g, '&#x00e1;');
      performerObj[key].SortOrder = performerObj[key].Position;


      performerObj[key].Twitter = performerObj[key].twitter.replace('@', '');

      performerObj[key].SortOrder = parseInt(performerObj[key].SortOrder, 10) || 99999;
    }

    performerObj = util.sortArray(performerObj, 'SortOrder');

    fs.writeFileSync(this.TMP_PATH, JSON.stringify(performerObj, null, ' '), 'utf8');
  },

  addRelationships: function() {
    var performerObj = festivalData.getPerformerObject();
    var scheduleObj = festivalData.getScheduleObject();

    for (var key in performerObj) {
      performerObj[key].events = festivalData.getEventsForPerformer(performerObj[key].id)
      performerObj[key].mc_events = festivalData.getMCEventsForPerformer(performerObj[key].id)
    }
    fs.writeFileSync(this.TMP_PATH, JSON.stringify(performerObj, null, ' '), 'utf8');
  },

  writeToFixtureFile: function() {
    const performerData = {performers: festivalData.getPerformerObject()};
    fs.writeFileSync(this.API_PATH, JSON.stringify(performerData, null, 2), 'utf8');
  },

  createStaticPages: function() {
    var performerObj = festivalData.getPerformerObject();
    var rootPath = './performer/';
    wrench.rmdirSyncRecursive('./performer', true);
    fs.mkdirSync('./performer');

    for (var key in performerObj) {
      var fileName = util.convertToSlug(performerObj[key].Name);
      var dirPath = rootPath + performerObj[key].pageUrl;
      var filePath = dirPath + '/index.html';

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.openSync(filePath, 'w');
      process.stdout.write('.'.green);
      fs.appendFileSync(filePath, '---\n');
      fs.appendFileSync(filePath, 'layout: page\n');
      fs.appendFileSync(filePath, 'title: \'' + performerObj[key].Name + '\'\n');
      fs.appendFileSync(filePath, 'category: performer \n');
      fs.appendFileSync(filePath, 'featuredimage: \'/img/performer-images/performer-' + util.cleanStr(performerObj[key].Name) + '-300x300.jpg\'\n');
      fs.appendFileSync(filePath, '---\n\n');

      fs.appendFileSync(filePath, util.htmlToText(performerObj[key].Bio));
    }

    var message = '\n' + performerObj.length + ' show pages created\n';
    console.log(message.green);
  },

  createHeadshots: function() {
    var performerObj = festivalData.getPerformerObject();

    for (var key in performerObj) {
      var item = performerObj[key];
      //this.buildImageFromURLIfUpdated(item.Name, item.PhotoUrl, 'performer');
    }
  // curl -z tmp/aaronweaver.jpg http://localhost:4000/img/performer-images/performer-aaronweaver-300x300.jpg -o tmp/aaronweaver.jpg
  }
});

module.exports = PerformerBuilder;


