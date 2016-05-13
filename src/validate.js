'use strict';

import {validate} from 'jsonschema';
import fs from 'fs';
import yaml from 'js-yaml';

let schemas;

function getSchema(name) {
  if (!schemas) {
    schemas = {};
    let fullSpec = yaml.safeLoad(fs.readFileSync(__dirname + '/../doc/spec.yaml', 'utf-8'));
    for (let key in fullSpec.api) {
      let spec = fullSpec.api[key];
      schemas[key] = {
        type: 'object',
        required: spec.required,
        additionalProperties: false,
        properties: Object.assign({}, fullSpec.defaultProperties, spec.properties)
      };
    }
  }
  return schemas[name] || {};
}

export default (name, params) => {
  let schema = getSchema(name);
  return validate(params, schema).errors;
};
