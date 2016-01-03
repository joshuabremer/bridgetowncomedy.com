const http = require('http');
const fs = require('fs');
const easyimg = require('easyimage');
const util = require('./utilities');
const Class = require('./lib/class-inheritance.js');

const ObjectBuilder = Class.extend({
  TMP_PATH: null,
  FIXTURES_PATH: null,

  buildFixtures: function() {
    this.normalizeData();
    this.addRelationships();
    this.writeToFixtureFile();
    //this.createStaticPages();
    console.log('Finished: ' + this.API_PATH);
  },

  normalizeData: function(/*filepath*/) {
    // Override this...
  },

  addRelationships: function(/*filepath*/) {
    // Override this...
  },

  writeToFixtureFile: function() {
    // Override this...
  },

  createStaticPages: function() {
    // Override this...
  },

  buildThumbnail: function(imgSrc, imgDest, fill) {
    fill = fill || false;
    easyimg.convert({
      src: imgSrc,
      dst: imgDest,
      quality: 80
    })
      .then(function(/*file*/) {
        easyimg.thumbnail({
          src: imgDest,
          dst: imgDest,
          width: 300,
          height: 300,
          x: 0,
          y: 0,
          fill: fill
        },
          function(err/*, image*/) {
            if (err) {
              var errMsg = 'Error resizing: ' + imgDest;
              console.log(errMsg.red);
              return;
            }
          //smushit.smushit(imgDest);
          //console.log('Resized and cropped: ' + image.width + ' x ' + image.height + ' | ' + imgDest);
          // fs.unlink(imgSrc, function() {
          //  console.log('Deleted tmp file: ' + imgSrc);
          // });
          })
          .catch(function(err) {
            console.log(err);
          });
      });
  },

  buildImageFromURL: function(name, url, prefix) {
    var _this = this;
    var filename = url.replace(/^.*[\\\/]/, '');
    var file = fs.createWriteStream('tmp/' + filename);

    var request = http.get(url, function(response) {
      //console.log("Created: " + "tmp/" + filename);
      process.stdout.write("o".green);
      response.pipe(file);
      response.on("end", function() {
        _this.buildThumbnail("tmp/" + filename, "public/img/" + prefix + "-images/" + prefix + "-" + util.cleanStr(name) + "-300x300.jpg");
      });
    });
    request.on("error", function(/*err*/) {
      setTimeout(function() {
        _this.buildImageFromURL.call(_this, name, url, prefix);
      }, 1000 * Math.random());

    });
  },

  buildImageFromURLIfUpdated: function(name, url, prefix) {
    var _this = this;
    var filename = url.replace(/^.*[\\\/]/, '');
    var options = {
      method: 'HEAD',
      host: 'bridgetown.festivalthing.com',
      port: 80,
      path: url.replace('http://bridgetown.festivalthing.com', '')
    };

    if (!fs.existsSync('public/img/' + prefix + '-images/' + prefix + '-' + util.cleanStr(name) + '-300x300.jpg')) {
      this.buildImageFromURL.call(_this, name, url, prefix);
      return;
    }

    var req = http.get(options, function(res) {
      var lastModified = res.headers['last-modified'] || 'Sun, 1 Jan 2050 00:00:00 GMT';
      if (!fs.existsSync('tmp/' + filename)) {
        _this.buildImageFromURL.call(_this, name, url, prefix);
        return;
      }
      var fileModified = fs.statSync('tmp/' + filename).mtime;
      if (new Date(lastModified) > new Date(fileModified)) {
        _this.buildImageFromURL.call(_this, name, url, prefix);
      } else {
        process.stdout.write('.'.green);
      }
    }
    );

    req.on('error', function(/*err*/) {
      setTimeout(function() {
        _this.buildImageFromURLIfUpdated.call(_this, name, url, prefix);
      }, 1000 * Math.random());
    });
  }
});

module.exports = ObjectBuilder;