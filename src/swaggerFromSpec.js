
import fs from 'fs';
import yaml from 'js-yaml';
import {specToPaths} from './specToPaths';

const version = require('../package.json').version;
const majorVersion = parseInt(version, 10);

export function getSpecification(specName = 'definitions') {
  const path = __dirname + '/../doc/specs/';
  return yaml.safeLoad(fs.readFileSync(`${path}${specName}.yaml`).toString('utf-8'));
}

function generateSwagger(spec) {
  const path = __dirname + '/../doc/';
  //const spec = yaml.safeLoad(fs.readFileSync(`${path}${specName}.yaml`).toString('utf-8'));
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

const glob = require('glob');
const extendify = require('extendify');
function loadYamlFiles() {
  return new Promise(function(resolve) {
    const path = __dirname + '/../doc';
    glob(path + '/**/*.yaml', function (er, files) {
      console.log(files);
      const contents = files.map(f => {
        return yaml.safeLoad(fs.readFileSync(f).toString('utf-8'));
      });
      const extend = extendify({
        inPlace: false,
        isDeep: true
      });
      resolve(contents.reduce(extend));
    });
  });
}

export default function (specName = 'spec') {
  return loadYamlFiles().then(function(spec){
    return generateSwagger(spec);
  });
}
