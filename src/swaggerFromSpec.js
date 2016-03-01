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
        'x-spec': spec,
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
        paths: {
          '/foo': {
            post: {
              description: 'Some description',
              parameters: [{
                name: 'someparam',
                in: 'body',
                description: 'param desc',
                required: true,
                schema: {
                  type: 'object',
                  properties: {
                    a: {
                      type: 'integer',
                      format: 'int32'
                    },
                    b: {
                      type: 'string'
                    }
                  }
                }
              }],
              responses: {
                200: {
                  description: 'result desc...',
                  schema: {
                    type: 'string'
                  }
                },
                default: {
                  description: 'error',
                  schema: {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
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
