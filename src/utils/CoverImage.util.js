'use strict';

/**
 * @file
 * Utility functions focused on displaying images
 */

export function rewriteCoverImageUrl(url) {
  let newUrl = url;
  if (url.indexOf('http://moreinfo.addi.dk/') === 0) {
    newUrl = '/moreinfo/' + encodeURIComponent(url.replace('http://moreinfo.addi.dk/', ''));
  }
  return newUrl;
}
