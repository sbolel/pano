'use strict';

// Helpers
const fullUrl = (url) => url[0] === '/' ? `https:${url}` : url;

// jQuery on document ready
$(() => {
  const panos = new PanoPage('pano', (elem) => fullUrl($(elem).children().first().attr('src')));
  panos.view();
});
