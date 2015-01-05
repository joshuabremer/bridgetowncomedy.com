DS.LocalRESTSerializer = DS.RESTSerializer.extend({
  extractSingle: function(store, type, payload) {
    console.log('extractSingle');
    // newPayload = {};
    // newPayload.categories = [];
    // newPayload[type.typeKey] = payload.item;

    // Sideload the categories
    // if (payload.item.categories) {
    //   payload.item.category_ids = payload.item.categories;
    //   _.each(payload.item.categories,function(category) {
    //     newPayload.categories.push({id:category, name: category});
    //   });
    //   newPayload.categories = _.uniq(newPayload.categories);
    // }
    return this._super(store, type, payload);
  },
  extractArray: function(store, primaryType, payload) {
    console.log('extractArray');
    newPayload = {};
    newPayload.categories = [];
    newPayload[primaryType.typeKey + 's'] = payload;
    console.log(newPayload);
    // Sideload the categories
    // _.each(payload.items,function(item,index) {
    //   if (item.categories) {
    //     item.category_ids = item.categories;
    //     _.each(item.categories,function(category) {
    //       newPayload.categories.push({id:category, name: category});
    //     });
    //     newPayload.categories = _.uniq(newPayload.categories);
    //   }
    // });
    return this._super(store, primaryType, newPayload);
  },

  normalize: function(type, hash, prop) {
    console.log('normalize');
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
      hash.id = hash.PerformerId;
      hash.name = hash.Name;
      hash.bio = hash.Bio;
      hash.headshot = hash.PhotoUrl;
      return hash;
    },
    performer: function(hash) {
      hash.id = hash.PerformerId;
      hash.name = hash.Name;
      hash.bio = hash.Bio;
      hash.headshot = hash.PhotoUrl;
      return hash;
    }//,
    // newsposts: function(hash) {
    //   hash.id = hash.urlId;
    //   hash.htmlContent = hash.body;
    //   return hash;
    // },
    // newspost: function(hash) {
    //   hash.id = hash.urlId;
    //   hash.htmlContent = hash.body;
    //   return hash;
    // }
  }
});

DS.LocalAdapter = DS.RESTAdapter.extend({
  //host: 'http://bridgetown.festivalthing.com/export',
  //host: 'http://127.0.0.1:8000',
  namespace: 'assets',

  buildURL: function(type, id, params) {
    var url = [],
        host = Ember.get(this, 'host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }
    if (id) { url.push(id); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }
    url += '.json';
    //url += '.json?format=json-pretty';
    console.log(url);
    return url;
  },
  defaultSerializer: "DS/LocalREST"
  //,
  // ajaxOptions: function(url, type, hash) {
  //   hash = this._super(url, type, hash);
  //   if (window.location.hostname != "bridgetown.festivalthing.com") {
  //     hash.dataType = 'jsonp';
  //   }
  //   return hash;
  // }
});