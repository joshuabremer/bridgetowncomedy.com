(function(){
  "use strict";

  DS.SquarespaceRESTSerializer = DS.RESTSerializer.extend({
    extractSingle: function(store, type, payload) {
      newPayload = {};
      newPayload.categories = [];
      newPayload[type.typeKey] = payload.item;

      // Sideload the categories
      if (payload.item.categories) {
        payload.item.category_ids = payload.item.categories;
        _.each(payload.item.categories,function(category) {
          newPayload.categories.push({id:category, name: category});
        });
        newPayload.categories = _.uniq(newPayload.categories);
      }
      return this._super(store, type, newPayload);
    },
    extractArray: function(store, primaryType, payload) {
      newPayload = {};
      newPayload.categories = [];
      newPayload[primaryType.typeKey + 's'] = payload.items;

      // Sideload the categories
      _.each(payload.items,function(item,index) {
        if (item.categories) {
          item.category_ids = item.categories;
          _.each(item.categories,function(category) {
            newPayload.categories.push({id:category, name: category});
          });
          newPayload.categories = _.uniq(newPayload.categories);
        }
      });
      return this._super(store, primaryType, newPayload);
    },

    normalize: function(type, hash, prop) {
      this.normalizeId(hash);
      this.normalizeAttributes(type, hash);
      this.normalizeRelationships(type, hash);

      this.normalizeUsingDeclaredMapping(type, hash);

      if (this.normalizeHash && this.normalizeHash[prop]) {
        hash = this.normalizeHash[prop](hash);
      }
      return this._super(type, hash, prop);
    },
    normalizeHash: {
      performers: function(hash) {
        hash.id = hash.urlId;
        hash.name = hash.title;
        hash.bio = hash.body;
        hash.headshot = hash.assetUrl;
        return hash;
      },
      performer: function(hash) {
        hash.id = hash.urlId;
        hash.name = hash.title;
        hash.bio = hash.body;
        hash.headshot = hash.assetUrl;
        return hash;
      },
      newsposts: function(hash) {
        hash.id = hash.urlId;
        hash.htmlContent = hash.body;
        return hash;
      },
      newspost: function(hash) {
        hash.id = hash.urlId;
        hash.htmlContent = hash.body;
        return hash;
      }
    }
  });

  DS.SquarespaceAdapter = DS.RESTAdapter.extend({
    //host: 'http://bridgetowncomedy.com',
    //host: '127.0.0.1:8000/',
    namespace: 'fixtures',

    buildURL: function(type, id, params) {
      var url = [],
          host = Ember.get(this, 'host'),
          prefix = this.urlPrefix();

      if (type) { url.push(this.pathForType(type)); }
      if (id) { url.push(id); }

      if (prefix) { url.unshift(prefix); }

      url = url.join('/');
      if (!host && url) { url = '/' + url; }
      //url += '?format=json-pretty';
      url += '.json?format=json-pretty';
      return url;
    },
    ajaxOptions: function(url, type, hash) {
      hash = this._super(url, type, hash);
      if (window.location.hostname != "bridgetowncomedy.com") {
        hash.dataType = 'jsonp';
      }
      return hash;
    },
    normalize: function() {
      // Do nothing...
    },
    defaultSerializer: "DS/SquarespaceREST"
  });
}());