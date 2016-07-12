
import {expect, assert} from 'chai';

function stepDefinitionsWrapper() {
  this.When(/^the swagger.json file is downloaded$/i, function (cb) {
    this.api.get('/v1/swagger.json').end((err, res) => {
      expect(err).to.not.exist;
      this.result = res.text;
      cb();
    });
  });

  this.Then(/^the result contains "([a-z0-9]+)"$/i, function (text) {
    expect(this.result).to.contain(text);
  });
}

module.exports = stepDefinitionsWrapper;
