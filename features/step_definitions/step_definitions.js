import {expect, assert} from 'chai';
import fs from 'fs';
import path from 'path';

function stepDefinitionsWrapper() {
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

  this.When(/^"([^"]+)" transform is called with form: (.*)$/i, function (transform, jsonData, cb) {
    const body = JSON.parse(jsonData);
    this.api
      .post(`/v1/${transform}`)
      .send(body)
      .set('Authorization', 'Bearer qwerty')
      .end((err, res) => {
        assert.isNotOk(err, 'The transform should not return an error!');
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

  this.Then(/^"([^"]*)" file can be found and deleted$/i, function(filename) {
    const filePath = path.join(__dirname, filename);

    assert.doesNotThrow(() => fs.statSync(filePath), 'File was found');
    assert.doesNotThrow(() => fs.unlinkSync(filePath), 'File was deleted');
  });

  this.Then(/compare to results file "([^"]*)"/i, function(filename) {
    const filePath = path.join(__dirname, `../__results__/${filename}.json`);

    try {
      fs.statSync(filePath);
    }
    catch (err) {
      // Could not find results file, create it.
      fs.writeFileSync(filePath, JSON.stringify(this.result));
    }

    const resultsData = JSON.parse(fs.readFileSync(filePath));
    assert.deepEqual(resultsData, this.result);
  });

  this.When(/^a request is dispatched without a token$/i, function (cb) {
    this.api
      .get('/v1/work')
      .end((err, res) => {
        this.result = res.body;
        cb();
      });
  });

  this.Then(/^an error should occur$/i, function () {
    assert.notEqual(this.result.statusCode, 200);
  });

  this.When(/^"([^"]+)" transform is called via ws with: (.*)/i, function (transform, jsonData, cb) {
    const data = JSON.parse(jsonData);
    this.ws.emit(transform, data, (err, res) => {
      this.result = res;
      cb();
    });
  });
}

module.exports = stepDefinitionsWrapper;
