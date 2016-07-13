import {expect, assert} from 'chai';
import fs from 'fs';
import path from 'path';

function stepDefinitionsWrapper() {
  this.Given(/^"([^"]*)" mock is loaded ([0-9]+) times$/i, function (mockName, times) {
    this.loadMock(mockName, times);
  });

  this.When(/^the swagger.json file is downloaded$/i, function (cb) {
    this.api.get('/v1/swagger.json').end((err, res) => {
      assert.isNotOk(err, 'The swagger request should not contain an error!');
      this.result = res.text;
      cb();
    });
  });

  this.When(/^"([^"]*)" transform is called with "([^"]*)"$/i, function (transform, qs, cb) {
    qs = qs.length && qs.indexOf('?') !== 0 ? `?${qs}` : qs || '';
    this.api
      .get(`/v1/${transform}${qs}`)
      .set('Authorization', 'Bearer qwerty')
      .end((err, res) => {
        assert.isNotOk(err, 'The transform request should not contain an error!');
        this.result = res.body;
        cb();
      });
  });

  this.Then(/^the result contains "([a-z0-9]+)"$/i, function (text) {
    expect(this.result).to.contain(text);
  });

  this.Then(/^the results keys are: (.*)$/i, function (jsonKeys) {
    const keys = JSON.parse(jsonKeys);
    const resultKeys = Object.keys(this.result);

    assert.deepEqual(resultKeys, keys, 'Check that the resulting keys are expected');
  });

  this.Then(/^"([^"]*)" file can be found and deleted$/, function(filename) {
    const filePath = path.join(__dirname, filename);

    assert.doesNotThrow(() => fs.statSync(filePath), 'File was found');
    assert.doesNotThrow(() => fs.unlinkSync(filePath), 'File was deleted');
  });
}

module.exports = stepDefinitionsWrapper;
