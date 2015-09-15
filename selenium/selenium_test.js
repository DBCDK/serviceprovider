'use strict';
var fs = require('fs');
var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');


var BASE_URL = process.env.SELENIUM_URL || 'http://localhost:8080';


function writeScreenshot(data, name) {
  name = name || 'ss.png';
  var screenshotPath = '';
  fs.writeFileSync(screenshotPath + name, data, 'base64');
}


test.describe('Title assertion', function () {
  chrome.start();

  test.it('Title is Palles Gavebod', function () {
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    driver.get(BASE_URL);

    driver.getTitle().then(function (title) {
      assert.equal(title, 'Palles Gavebod', 'Title is Palles Gavebod');
    });


    driver.takeScreenshot().then(function(data) {
      writeScreenshot(data, 'output.png');
    })

    driver.quit();
    chrome.stop();
  });
});


test.describe('Express endpoint', function () {
  test.it('/profile/login can be reached', function () {
    chrome.start();
    var endpoint = '/profile/login';
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    driver.get(BASE_URL + endpoint);
    driver.wait(webdriver.until.elementIsVisible(driver.findElement({tagName: 'body'})), 12000);
    var body = driver.findElement({tagName: 'body'});
    var header = body.findElement({id: 'header'});

    header.getId()
      .then(function(id) {
        assert.notEqual(typeof id, 'undefined');
      });

    driver.quit();
    chrome.stop();

  });

  test.it('/profile/signup can be reached', function () {
    chrome.start();
    var endpoint = '/profile/signup';
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    driver.get(BASE_URL + endpoint);
    driver.wait(webdriver.until.elementIsVisible(driver.findElement({tagName: 'body'})), 12000);
    var body = driver.findElement({tagName: 'body'});
    var header = body.findElement({id: 'header'});

    header.getId()
      .then(function(id) {
        assert.notEqual(typeof id, 'undefined');
      });

    driver.quit();
    chrome.stop();
  });
});

test.describe('Login page', function () {
  test.it('is rendered', function () {
    chrome.start();
    var endpoint = '/profile/login';
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
    driver.get(BASE_URL + endpoint);
    driver.wait(webdriver.until.elementIsVisible(driver.findElement({tagName: 'input', name: 'username'})), 5000);
    var emailInput = driver.findElement({tagName: 'input', name: 'username'});
    emailInput.sendKeys('rasmussen.matias@gmail.com');
    driver.quit();
    chrome.stop();
  });
});

test.describe('Signup page', function () {
  test.it('is rendered', function () {
    chrome.start();
    var endpoint = '/profile/signup';
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    driver.get(BASE_URL + endpoint);
    driver.wait(webdriver.until.elementIsVisible(driver.findElement({tagName: 'input', name: 'username'})), 5000);

    driver.quit();
    chrome.stop();

  });

});
