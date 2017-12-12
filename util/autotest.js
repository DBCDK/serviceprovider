const doc = `



Utility script that generates snapshot unit tests.

Usage:

node autotest.js recreate file1.js [file2.js ...]
  Sends the request from the unit test, with "createTest"="file1" etc. added.
  This is used to regenerate the unit test with updated mock data.

node autotest.js request file1.js [file2.js ...]
  Sends the request present in the unit test. Useful for end2end testing.

node autotest.js create endpoint '{"parameters": "as JSON"}' [test_name]
  Send a request to the given endpoint, - adding the test_name
  adds "createTest"="test_name" to the request, thus creating the unit test.


You need to start the serviceprovider in dev mode first, i.e. 'npm run dev'.
Also remember to 'npm run prettier' after (re-)creating unit tests,
to ensure that they are properly formatted.




`.trim();

const {promisify} = require('util');
const path = require('path');
const fs = require('fs');
const http = require('http');
const {version} = require('../package.json');

async function readRequestParamsFromTestFile(filename) {
  const lines = (await promisify(fs.readFile)(filename, 'utf-8')).split('\n');
  let req = undefined;

  if (lines[0].startsWith('// AUTOTEST GENERATOR: ')) {
    req = JSON.parse(lines[0].replace('// AUTOTEST GENERATOR:', ''));

  } else if (lines[1].startsWith('// Request: ')) {
    const params = JSON.parse(lines[1].replace(/^.. Request: [^ ]* /, ''));
    const endpoint = lines[1].split(' ')[2];
    req = {params, endpoint};

  } else {
    return undefined;
  }
  return Object.assign(req, {name: path.basename(filename, '.js')});
}

function sendRequest(o) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        port: 8080,
        method: 'POST',
        path: `/v${version.split('.')[0]}/` + o.endpoint,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer qwerty'
        }
      },
      res => {
        let result = '';
        res.setEncoding('utf-8');
        res.on('data', s => (result += s));
        res.on('error', err => reject(err));
        res.on('end', _ => resolve(result));
      }
    );
    req.write(JSON.stringify(o.params));
    req.end();
  });
}

async function main() {
  if (process.argv.length <= 3) {
    return console.log(doc);
  }
  const command = process.argv[2];
  let tests;

  if (command === 'create') {
    if (process.argv.length < 5 || process.argv.length > 6) {
      return console.log(doc);
    }
    tests = [
      {
        endpoint: process.argv[3],
        params: JSON.parse(process.argv[4])
      }
    ];
    if (process.argv[5]) {
      tests[0].params.createTest = process.argv[5];
    }

  } else if (command === 'recreate' || command === 'request') {
    tests = (await Promise.all(
      process.argv.slice(3).map(readRequestParamsFromTestFile)
    )).filter(o => !!o);
    if (command === 'recreate') {
      for (const test of tests) {
        test.params.createTest = test.name;
      }
    }

  } else {
    return console.log(doc);
  }

  for (const test of tests) {
    console.log(test.endpoint, test.params);
    console.log(await sendRequest(test));
  }
}
main();
