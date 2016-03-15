(function() {
  "use strict";
  var page = require('webpage').create();
  page.open('http://localhost:4000/performers', function (status) {
    // Check for page load success
    if (status !== 'success') {
      console.log('Unable to access network');
      phantom.exit(1);
    } else {
      // Wait for 'signin-dropdown' to be visible
      waitFor(function() {
        // Check in the page if a specific element is now visible
        return page.evaluate(function() {
          return $(':contains("Andy Wood")').is(':visible');
        });
      }, function() {
       console.log('The performers page is visible.');
       phantom.exit();
     });
    }
  });
}());