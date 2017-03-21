
import fs from 'fs';
import yaml from 'js-yaml';
import {specToPaths} from './specToPaths';

const version = require('../package.json').version;
const majorVersion = parseInt(version, 10);

export function generateSwagger(specName = 'spec') {
  const path = __dirname + '/../doc/';
  const spec = yaml.safeLoad(fs.readFileSync(`${path}${specName}.yaml`).toString('utf-8'));
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
    parameters: spec.parameters
  };
}

export default function (specName = 'spec') {
  return Promise.resolve(generateSwagger(specName));
}
