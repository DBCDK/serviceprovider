import {expect, assert} from 'chai';
import fs from 'fs';
import path from 'path';

function swaggerFileDownload (cb) {
  this.api.get('/v1/swagger.json').end((err, res) => {
    assert.isNotOk(err, 'The swagger request should not contain an error!');
    this.result = res.text;
    cb();
  });
}

function apiGetRequestWithoutToken (cb) {
  this.api
    .get('/v1/work')
    .end((err, res) => {
      this.result = res.body;
      cb();
    });
}

function apiGetRequestWithToken (transform, qs, cb) {
  qs = qs.length && qs.indexOf('?') !== 0 ? `?${qs}` : qs || '';
  this.api
    .get(`/v1/${transform}${qs}`)
    .set('Authorization', 'Bearer qwerty')
    .end((err, res) => {
      assert.isNotOk(err, 'The transform request should not contain an error!');
      this.result = res.body;
      cb();
    });
}

function apiPostRequestWithTokenAndForm (transform, jsonData, cb) {
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
}

function apiWSRequestWithToken (transform, jsonData, cb) {
  const data = JSON.parse(jsonData);
  this.ws.emit(transform, data, (err, res) => {
    this.result = res;
    cb();
  });
}

function assertThisResultContains (text) {
  expect(this.result).to.contain(text);
}

function assertResultKeysMatch (jsonKeys) {
  const keys = JSON.parse(jsonKeys);
  const resultKeys = Object.keys(this.result);

  assert.deepEqual(resultKeys, keys, 'Check that the resulting keys are expected');
}

function assertFileExistsAndCanBeDeleted (filename) {
  const filePath = path.join(__dirname, filename);

  assert.doesNotThrow(() => fs.statSync(filePath), 'File was found');
  assert.doesNotThrow(() => fs.unlinkSync(filePath), 'File was deleted');
}

function assertThisResultMatchesFile (filename) {
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
}

function assertStatusCodeIsOver200 () {
  assert.notEqual(this.result.statusCode, 200);
}

function stepDefinitionsWrapper() {
  this.When(/^the swagger.json file is downloaded$/i, swaggerFileDownload);
  this.When(/^"([^"]*)" transform is called with "([^"]*)"$/i, apiGetRequestWithToken);
  this.When(/^"([^"]+)" transform is called with form: (.*)$/i, apiPostRequestWithTokenAndForm);
  this.When(/^a request is dispatched without a token$/i, apiGetRequestWithoutToken);
  this.When(/^"([^"]+)" transform is called via ws with: (.*)/i, apiWSRequestWithToken);

  this.Then(/^the result contains "([a-z0-9]+)"$/i, assertThisResultContains);
  this.Then(/^the results keys are: (.*)$/i, assertResultKeysMatch);
  this.Then(/^"([^"]*)" file can be found and deleted$/i, assertFileExistsAndCanBeDeleted);
  this.Then(/compare to results file "([^"]*)"/i, assertThisResultMatchesFile);
  this.Then(/^an error should occur$/i, assertStatusCodeIsOver200);
}

module.exports = stepDefinitionsWrapper;
