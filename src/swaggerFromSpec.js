'use strict';
import fs from 'fs';
import yaml from 'js-yaml';

function specToPaths(specs) {
  let paths = {};
  let defaultProperties = specs.defaultProperties;
  for (let key in defaultProperties) {
    if (defaultProperties[key].noSwag) {
      delete defaultProperties[key];
    }
  }

  for (let method in specs.api) { // eslint-disable-line guard-for-in
    let spec = specs.api[method];
    let ref = {
      properties: {},
      required: []
    };
    if (spec.$ref) {
      if (!spec.$ref.startsWith('#/definitions/')) {
        throw 'Unexpected $ref prefix';
      }
      let definitionName = spec.$ref.slice('#/definitions/'.length);
      ref = specs.definitions[definitionName];
      if (!ref) {
        throw 'Missing definition';
      }
    }
    spec.properties = Object.assign({}, defaultProperties, spec.properties, ref.properties);
    spec.required = spec.required || ref.required;
    spec.required.push('access_token');
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

    // Document response object
    let responses = {
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
    };

    // Create parameter list for GET-requests
    let params = [];
    if (request.schema && request.schema.properties) {
      for (let name in request.schema.properties) { // eslint-disable-line guard-for-in
        let schema = request.schema.properties[name];
        let param = Object.assign({}, schema, {
          in: 'query',
          required: (request.schema.required || []).includes(name),
          name: name});
        delete param.example;
        delete param.examples;
        delete param.properties;
        if (param.type === 'object') {
          param.type = 'string';
          param.description += '\n Parameter string contains a JSON encoded object. See POST-method for details';
        }
        params.push(param);
      }
    }

    paths['/' + method] = {
      post: {
        tags: spec.tags,
        description: spec.description || '',
        parameters: [request],
        responses: responses
      },
      get: {
        tags: spec.tags,
        description: spec.description || '',
        parameters: params,
        responses: responses
      }
    };
  }
  return paths;
}

const version = require('../package.json').version;
const majorVersion = parseInt(version, 10);

export default function(specName = 'spec') {
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
          version: version,
          title: 'DBC ServiceProvider',
          description: desc
        },
        basePath: '/v' + majorVersion,
        schemes: (process.env.SWAGGER_HTTP // eslint-disable-line no-process-env
            ? ['http', 'https', 'wss']
            : ['https', 'wss']),
        consumes: ['application/json'],
        produces: ['application/json'],
        paths: specToPaths(spec),
        definitions: spec.definitions,
        externalDocs: {
          description: 'Extra documentation in the github repository',
          url: 'https://github.com/DBCDK/serviceprovider/tree/master/doc'
        }
      };
    }).catch(e => {
      return {error: e};
    });
}
