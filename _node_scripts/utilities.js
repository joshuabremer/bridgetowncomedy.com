var http = require("http");
var fs = require("fs");
var stripBom = require('strip-bom');
var Q = require( "q" );
var ent = require('ent');

function Utilities() {}

Utilities.prototype.cleanStr = function(string) {
  return string.replace(/\W/g, '').toLowerCase();
}


Utilities.prototype.convertToSlug = function( text ) {
    return  ent.decode(text)
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

Utilities.prototype.sortArray = function( arr, key ) {
  arr.sort(function(a, b){
    var keyA = a[key],
    keyB = b[key];
    // Compare the 2 dates
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
  });
  return arr;
}


// path should have trailing slash
Utilities.prototype.removeDirForce = function(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0) {
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        this.removeDirForce.call(this,filePath);
    }
  }
};

Utilities.prototype.requestJsonAndSave = function( url, path, callback ) {
  var _this = this;
  var deferred = Q.defer();
  var file = fs.createWriteStream( path );

  fs.writeFileSync( path ,"","utf8" );
  var request = http.get( url, function(response) {

    response.on( "data", function ( chunk ) {
      fs.appendFileSync( stripBom(path) , chunk );
    });

    response.on( "end", function ( data ) {
      var f = fs.readFileSync( path, "utf8" );
      var json = JSON.stringify(JSON.parse(_this.removeGremlins(f)), null);
      fs.writeFileSync(path, json, "utf8");
      deferred.resolve();
      if (callback) {
        callback();
      }
    });
  });

  request.on( "error", function(e) {
    console.log("Got error: " + e.message);
  });

  return deferred.promise;
};

Utilities.prototype.removeGremlins = function( text ) {
  return stripBom(text).replace(/\\u2028/g, "")
}

Utilities.prototype.htmlToText = function( html ) {
  html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
  html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
  html = html.replace(/<\/div>/ig, '\n');
  html = html.replace(/<\/li>/ig, '\n');
  html = html.replace(/<li>/ig, '  *  ');
  html = html.replace(/<\/ul>/ig, '\n');
  html = html.replace(/<\/p>/ig, '\n');
  html = html.replace(/<br\s*[\/]?>/gi, "\n");
  return html.replace(/<[^>]+>/ig, '');
}

module.exports = new Utilities();