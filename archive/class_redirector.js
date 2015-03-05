(function() {

  window.Redirector = (function() {
    function Redirector() {}

    Redirector.prototype.checkPushStateSupportAndRedirect = function() {
      if (window.history && window.history.pushState) {
        window.location.href = this.pushStateFromHash();
      } else {
        window.location.href = this.hashStateFromPush();
      }
    };

    Redirector.prototype.pushStateFromHash = function(url) {
      if (url === null) {
        url = window.location.href;
      }
      if (url.indexOf('#') == -1) return url;
      var urlParts = parseUri(url);
      return urlParts.protocol + '://' + urlParts.host + '/' + this.removeLeadingSlash(urlParts.anchor);
    };

    Redirector.prototype.hashStateFromPush = function(url) {
      if (url === null) {
        url = window.location.href;
      }
      if (url.indexOf('#') !== -1) return url;

      var urlParts = parseUri(url);
      return urlParts.protocol + '://' + urlParts.host + '/#' + urlParts.path;
    };

    Redirector.prototype.removeLeadingSlash = function(string) {
      if( string.charAt( 0 ) === '/' ) {
        string = string.slice( 1 );
      }
      return string;
    };

    return Redirector;

  })();

// parseUri 1.2.2
  // (c) Steven Levithan <stevenlevithan.com>
  // MIT License

  function parseUri (str) {
    var o   = parseUri.options,
      m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
      uri = {},
      i   = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
      if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
  }

  parseUri.options = {
    strictMode: false,
    key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
    q:   {
      name:   "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  };

}());
