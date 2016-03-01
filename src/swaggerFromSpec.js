'use strict';
export default function() {
  let fs = require('fs');
  let yaml = require('js-yaml');
  let path = __dirname + '/../doc/';

  return Promise.all(
      [new Promise((resolve, reject) =>
        fs.readFile(path + 'spec.yaml', 'utf-8', (err, result) => err ? reject(err) : resolve(yaml.safeLoad(result)))),
      new Promise((resolve, reject) =>
        fs.readFile(path + 'description.md', 'utf-8', (err, result) => err ? reject(err) : resolve(result)))])
    .then(([spec, desc]) => {
      return {
        swagger: '2.0',
        info: {
          version: '0.0.1',
          title: 'DBC ServiceProvider',
          description: desc
        },
        schemes: [
          'https', 'wss'
        ],
        'x-spec': spec,
        paths: {
        },
        definitions: {
        },
        externalDocs: {
          description: 'Extra documentation in the github repository',
          url: 'https://github.com/DBCDK/serviceprovider/tree/master/doc'
        }
      };
    });
}
