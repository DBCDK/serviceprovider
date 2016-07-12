'use strict';

const configure = function () {
  // Set default timeout to one minute
  this.setDefaultTimeout(process.env.CUCUMBER_TIMEOUT || 60 * 1000); // eslint-disable-line
};

module.exports = configure;
