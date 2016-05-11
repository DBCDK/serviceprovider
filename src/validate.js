'use strict';

import validate from 'json-schema';
import fs from 'fs';
import yaml from 'js-yaml';


let schemas;

function getSchema(name) {
  if(!schemas) {
    schemas = {}
    let fullSpec = yaml.safeLoad(fs.readFileSync(__dirname + '/../doc/spec.yaml', 'utf-8')).api;
    for(let key in fullSpec) {
      let spec = fullSpec[name]
      schemas[key] = {
        type: 'object',
        required: fullSpec[key].required,
        properties: fullSpec[key].properties
      };
    }
  }
  return schemas[name] || {};
}

export default (name, params) => {
  let schema = getSchema(name);
  console.log('validate', name, params, JSON.stringify(schema).slice(0,80));
  console.log(validate(params, ""));
};
