import {Validator, validate} from 'jsonschema';
import loadSwagger from './swaggerFromSpec';
import fs from 'fs';
import yaml from 'js-yaml';

// Setup validator
var v = new Validator();
const swagger = loadSwagger();
v.addSchema(swagger, '/');

// Placeholders for schemas
const fullSpec = yaml.safeLoad(fs.readFileSync(__dirname + '/../doc/spec.yaml', 'utf-8'));

/**
 * Get JSON Schema for named request.
 * 
 * @param {String} name 
 */
function getRequestSchema(name) {
  const spec = fullSpec.api[name];
  if (spec) {
    return {
      type: 'object',
      required: spec.required,
      additionalProperties: false,
      properties: Object.assign({}, fullSpec.defaultProperties, spec.properties)
    };
  }
  return {};
}

/**
 * Get named JSON Schema for response.
 * @param {String} name 
 */
function getResponseSchema(name) {
  const spec = fullSpec.api[name];
  if (spec.response && spec.response) {
    return spec.response;
  }
  return {};
}

/**
 * Validate Request against Schema.
 * 
 * @param {String} name 
 * @param {Object} params 
 */
export function validateRequest (name, params) {
  const schema = getRequestSchema(name); 
  return validate(params, schema).errors;
}

/**
 * Validate response against JSON Schema.
 * 
 * @param {String} name 
 * @param {Object} response 
 */
export function validateResponse(name, response) {
  const schema = getResponseSchema(name);
  return v.validate(response, schema).errors;
}

