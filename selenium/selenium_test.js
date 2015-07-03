'use strict';
var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

var BASE_URL = process.env.SELENIUM_URL || 'http://localhost:8080';

test.describe('Title assertion', function() {
  test.it('Title is Palles Gavebod', function() {
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.phantomjs())
      .build();

    driver.get(BASE_URL);

    driver.getTitle().then(function(title) {
      assert.equal(title, 'Palles Gavebod', 'Title is Palles Gavebod');
    });
    driver.quit();
  });
});
