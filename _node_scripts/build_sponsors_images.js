console.log("=================================");
console.log("=== Building Sponsor Images ===");
console.log("=================================");

var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

cropSponsorImages();

function cropSponsorImages() {
  var dir = './img/sponsor-images';
  var files = fs.readdirSync(dir);
  for (var i in files) {
    if ( !files.hasOwnProperty(i) ) continue;
    if ( files[i].indexOf( "sponsor-" ) !== -1 ) continue;

    var fullPath = dir + '/' + files[i];
    if (!fs.statSync(fullPath).isDirectory()) {
      buildThumbnail(dir + '/' + files[i],'./img/sponsor-images/sponsor-' + files[i]);
    }
  }
}

function buildThumbnail(imgSrc, imgDest, fill) {
  fill = fill || false;
  easyimg.thumbnail(
    {
     src: imgSrc,
     dst: imgDest,
     width:300, height:300,
     x:0, y:0,
     fill: fill
     },
    function(err, image) {
     if (err) {
      console.log("Error resizing: " + imgSrc);
      return;
     }
     //smushit.smushit(imgDest);
     console.log("Resized and cropped: " + image.width + " x " + image.height + " | " + imgDest);
     // fs.unlink(imgSrc, function() {
     //  console.log("Deleted tmp file: " + imgSrc);
     // });
    }
  );
}
