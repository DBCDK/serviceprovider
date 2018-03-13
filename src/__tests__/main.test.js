const assert = require('assert');
const request = require('request');
const {promisify} = require('util');
const main = require('../main');
const socketClusterClient = require('socketcluster-client');
const {exec} = require('child_process');
const {version} = require('../../package.json');

const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));
const prequest = promisify(request);
const majorVersion = version.split('.')[0];
const port = +(process.env.PORT || 8080);
const apiUrl = `http://localhost:${port}/v${majorVersion}/`;

//
// Utility functions for the test
//
/**
 * Connecting to the socket cluster.
 */
async function scClientConnect() {
  const client = socketClusterClient.connect({
    port: port,
    hostname: 'localhost',
    path: `/v${majorVersion}/socketcluster/?access_token=qwerty`
  });
  await new Promise((resolve, reject) => {
    client.on('connect', resolve);
  });
  return client;
}

/**
 * Make sure we only instantiate one socketClusterClient,
 * even when file is reloaded several times while watching test.
 */
function scClient() {
  if (!global.socketClusterClientPromise) {
    global.socketClusterClientPromise = scClientConnect();
  }
  return global.socketClusterClientPromise;
}

//
// Actual test code
//
describe('main', () => {
  before(async () => {
    // start mini-smaug if not running
    try {
      await prequest('http://localhost:3000/');
    } catch (e) {
      exec('npm run start:minismaug');
    }

    // wait until the serviceprovider has started, at most 50*100ms
    for (let i = 0; i < 50; ++i) {
      try {
        await prequest(apiUrl);
        return;
      } catch (e) {
        // do nothing
      }
      await sleep(100);
    }
  });
  it('has a server running', async () => {
    await prequest(apiUrl);
  });

  describe('socket cluster transport', () => {
    let client;
    before(async () => {
      client = await scClient();
    });
    it('handles requests', async () => {
      await new Promise((resolve, reject) => {
        client.emit('status', {fields: ['version']}, (err, result) => {
          assert(err === null);
          assert.equal(result.statusCode, 200);
          assert.equal(result.data.version, version);
          resolve();
        });
      });
    });
    it('check, and fails on wrong parameters', async () => {
      await new Promise((resolve, reject) => {
        client.emit('status', {foo: 'bar'}, (err, result) => {
          assert.equal(result.statusCode, 400);
          assert.equal(
            result.error,
            ' additionalProperty "foo" exists in instance when not allowed'
          );
          resolve();
        });
      });
    });
  });

  describe('GET transport', () => {
    it('handles requests', async () => {
      const response = await prequest(
        apiUrl + 'status?access_token=qwerty&fields=["version"]'
      );
      const result = JSON.parse(response.body);
      assert.equal(result.statusCode, 200);
      assert.equal(result.data.version, version);
    });
    it('check, and fails on wrong parameters', async () => {
      const response = await prequest(
        apiUrl + 'status?access_token=qwerty&foo=bar'
      );
      const result = JSON.parse(response.body);
      assert.equal(result.statusCode, 400);
      assert.equal(
        result.error,
        ' additionalProperty "foo" exists in instance when not allowed'
      );
    });
  });

  describe('POST transport', () => {
    it('handles requests', async () => {
      const response = await prequest({
        url: apiUrl + 'status',
        method: 'POST',
        json: {access_token: 'qwerty', fields: ['version']}
      });
      const result = response.body;
      assert.equal(result.statusCode, 200);
      assert.equal(result.data.version, version);
    });
    it('check, and fails on wrong parameters', async () => {
      const response = await prequest({
        url: apiUrl + 'status',
        method: 'POST',
        json: {access_token: 'qwerty', foo: 'bar'}
      });
      const result = response.body;
      assert.equal(result.statusCode, 400);
      assert.equal(
        result.error,
        ' additionalProperty "foo" exists in instance when not allowed'
      );
    });
  });
});
