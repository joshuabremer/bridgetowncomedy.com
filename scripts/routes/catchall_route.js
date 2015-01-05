(function(){
  "use strict";

  App.CatchAllRoute = Ember.Route.extend({
    model: function(a,b,c) {
      var host = 'http://www.bridgetowncomedy.com/';
      return Ember.$.ajax({
        url: host + a[':'] + '?format=json-pretty',
        dataType: 'JSONP'
      });
    }
  });
}());