'use strict';

/**
 * @file
 * Utility functions focused on displaying images
 */

/**
 * Rewrites URL's starting with http://moreinfo.addi.dk/ to point towards the root of the parent site.
 * Implemented to allow rewrite of cacheheaders.
 *
 * @param {string} url The URL that should be rewritten
 * @return {string} The new URL. If the starting pattern was not found the original URL will be returned.
 */
export function rewriteCoverImageUrl(url) {
  let newUrl = url;
  if (url.indexOf('http://moreinfo.addi.dk/') === 0) {
    newUrl = '/moreinfo/' + encodeURIComponent(url.replace('http://moreinfo.addi.dk/', ''));
  }
  else if (url.indexOf('https://moreinfo.addi.dk/') === 0) {
    newUrl = '/moreinfo/' + encodeURIComponent(url.replace('https://moreinfo.addi.dk/', ''));
  }
  return newUrl;
}
