(function(){
  "use strict";

  App.Performer = DS.Model.extend({

  });

  function sluggify(string) {
    string = string || "";
    return string.replace(/\W/g, '-').toLowerCase();
  }

  function cleanStr(string) {
    string = string || "";
    return string.replace(/\W/g, '').toLowerCase();
  }

  Array.prototype.clone = function() { return this.slice(0); };

}());
