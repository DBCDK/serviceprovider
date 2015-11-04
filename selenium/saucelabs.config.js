'use strict';

/**
 * @file Browser capability configurations used for Selenium test on SauceLabs
 */

module.exports.saucelabs = {
  username: process.env.SAUCE_USERNAME,  // eslint-disable-line no-process-env
  accessKey: process.env.SAUCE_ACCESS_KEY,  // eslint-disable-line no-process-env
  browserCaps: [
    {
      name: 'IE8 Windows',
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '8.0'
    },
    {
      name: 'IE11 Windows',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11.0'
    },
    {
      name: 'iPhone',
      browserName: 'iphone',
      platform: 'OS X 10.10',
      version: '9.0',
      deviceName: 'iPhone 4s',
      deviceOrientation: 'portrait'
    },
    {
      name: 'iPad',
      browserName: 'iphone',
      platform: 'OS X 10.10',
      version: '8.4',
      deviceName: 'iPad 2',
      deviceOrientation: 'portrait'
    },
    {
      name: 'Chrome 45 Windows',
      browserName: 'chrome',
      platform: 'Windows 8.1',
      version: '45.0'
    },
    {
      name: 'Safari 8.0 OSX',
      browserName: 'safari',
      platform: 'OS X 10.10',
      version: '8.0'
    },
    {
      name: 'Firefox 38 Windows',
      browserName: 'firefox',
      platform: 'Windows 8.1',
      version: '38.0'
    },
    {
      name: 'Chrome Android',
      browserName: 'android',
      platform: 'Linux',
      version: '4.2',
      deviceName: 'Android Emulator',
      deviceOrientation: 'portrait'
    },
    {
      name: 'Firefox 39 OSX',
      browserName: 'firefox',
      platform: 'OS X 10.8',
      version: '39.0'
    }
  ]
};