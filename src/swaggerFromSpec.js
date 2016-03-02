'use strict';

function specToPaths(specs) {
  let paths = {};
  for (let tag in specs) { // eslint-disable-line guard-for-in
    for (let method in specs[tag]) { // eslint-disable-line guard-for-in
      let spec = specs[tag][method];
      let request = {
        name: 'request',
        description: 'Request object',
        in: 'body',
        required: true,
        schema: {
          type: 'object',
          required: spec.required,
          properties: spec.properties
        }};
      let obj = {
        description: spec.description || '',
        parameters: [request],
        responses: {
          default: {
            description: 'Response envelope',
            schema: {
              type: 'object',
              required: ['statusCode'],
              properties: {
                statusCode: {type: 'integer'},
                data: spec.response || {
                  type: 'object',
                  properties: {}
                },
                errors: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {}
                  }
                }
              }
            }
          }
        }
      };
      paths['/' + method] = {post: obj};
    }
  }
  return paths;
}

export default function(specName = 'spec') {
  let fs = require('fs');
  let yaml = require('js-yaml');
  let path = __dirname + '/../doc/';

  return Promise.all(
      [new Promise((resolve, reject) =>
        fs.readFile(path + specName + '.yaml', 'utf-8', (err, result) => err ? reject(err) : resolve(yaml.safeLoad(result)))),
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
        basePath: '/api',
        schemes: ['https', 'wss'],
        consumes: ['application/json'],
        produces: ['application/json'],
        paths: specToPaths(spec),
        definitions: {
        },
        externalDocs: {
          description: 'Extra documentation in the github repository',
          url: 'https://github.com/DBCDK/serviceprovider/tree/master/doc'
        }
      };
    });
}
