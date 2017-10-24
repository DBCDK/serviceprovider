import fs from 'fs';
import yaml from 'js-yaml';
import {specToPaths} from './specToPaths';
import glob from 'glob';
import extendify from 'extendify';

const version = require('../package.json').version;
const majorVersion = parseInt(version, 10);

export function getSpecification(specName = 'definitions') {
  const path = __dirname + '/../doc/specs/';
  return yaml.safeLoad(fs.readFileSync(`${path}${specName}.yaml`).toString('utf-8'));
}

/**
 * Extract Schema definition from swagger documentation. This is used to validate input objects.
 **/
export function getSchemaDefinition(swagger, name) {
  const definition = swagger.definitions[name] || {};
  if (definition.allOf && Array.isArray(definition.allOf)) {
    const definitionName = definition.allOf[0].$ref.replace('#/definitions/', '');
    const subDefinition = getSchemaDefinition(swagger, definitionName);
    definition.properties = Object.assign({}, definition.properties, subDefinition.properties);
    delete definition.allOf;
  } 
  Object.keys(definition.properties || {}).forEach(key => {
    if (definition.properties[key].$ref) {
      definition.properties[key] = getSchemaDefinition(swagger, definition.properties[key].$ref.replace('#/definitions/', ''));
    }
  }); 

  return definition;
}

function generateSwagger(spec) {
  const path = __dirname + '/../doc/';
  const desc = fs.readFileSync(`${path}description.md`).toString('utf-8');

  return {
    swagger: '2.0',
    info: {
      version: version,
      title: 'Open Platform',
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
    parameters: spec.parameters,
    responses: spec.responses
  };
}

function loadYamlFiles() {
  const path = __dirname + '/../doc';
  const files = glob.sync(path + '/**/*.yaml');
  const contents = files.map(f => {
    return yaml.safeLoad(fs.readFileSync(f).toString('utf-8'));
  });
  const extend = extendify({
    inPlace: false,
    isDeep: true
  });
  return contents.reduce(extend);
}

export default function() {
  return generateSwagger(loadYamlFiles());
}
