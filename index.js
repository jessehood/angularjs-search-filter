// ==UserScript==
// @name           Remove AngularJS From Angular Search
// @description:en    This script simply removes "AngularJS" from google searches containing the word "Angular".
// @include        /^https?://(?:www|encrypted|ipv[46])\.google\.[^/]+/(?:$|[#?]|search|webhp|imgres)/
// @run-at         document-start
// @grant          none
// @version 0.0.1.20180706155432
// @namespace https://greasyfork.org/users/194918
// ==/UserScript==

if (
  !location.href.toLowerCase().includes('angularjs') &&
  location.href.toLowerCase().includes('angular')
) {
  var newLocation = location.href.replace(/angular/i, 'Angular+-AngularJS');
  location.replace(newLocation);
}