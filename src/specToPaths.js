/**
 * @file: This file contains the specToPaths function, as well as any helper functions required.
 */

/**
 * This function construct the request schema.
 * @param {PlainObject} spec
 * @returns {PlainObject}
 */
function createRequest(spec) {
  return {
    name: 'request',
    description: 'Request object',
    in: 'body',
    required: true,
    schema: {
      type: 'object',
      required: spec.required || [],
      properties: spec.properties || {}
    }
  };
}

/**
 *
 * @param {PlainObject} spec
 * @returns {PlainObject}
 */
function createResponse(spec) {
  return {
    200: {
      description: 'Response envelope',
      schema: {
        type: 'object',
        required: ['statusCode'],
        properties: {
          statusCode: {type: 'integer', default: 200},
          data: Object.assign({
          }, spec.response),
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {}
            }
          }
        }
      }
    },
    500: {
      $ref: '#/responses/Error'
    },
    401: {
      $ref: '#/responses/InvalidToken'
    }
  };
}

function createRefFromSpec(spec, definitions) {
  let ref = {
    properties: {},
    required: []
  };

  if (spec.$ref) {
    if (!spec.$ref.startsWith('#/definitions/')) {
      throw 'Unexpected $ref prefix';
    }

    const definitionName = spec.$ref.slice(14); // Slice out '#/definitions/'
    ref = definitions[definitionName];

    if (!ref) {
      throw 'Missing definition';
    }
  }

  return ref;
}

function apiMethodIterator(method, specs) {
  const spec = specs.api[method];
  const definitions = specs.definitions;
  const defaultProperties = specs.defaultProperties;

  const ref = createRefFromSpec(spec, definitions);

  spec.properties = Object.assign({}, defaultProperties, spec.properties, ref.properties);
  spec.required = spec.required || ref.required;
  spec.required.push('access_token');

  // Document request/response objects
  const request = createRequest(spec);
  const responses = Object.assign({}, spec.responses || {}, createResponse(spec));

  // Create parameter list for GET-requests
  const params = Object.keys(request.schema.properties).map((name) => {
    const schema = request.schema.properties[name];
    const param = Object.assign({}, schema, {
      in: 'query',
      required: request.schema.required.includes(name),
      name: name
    });

    delete param.example;
    delete param.examples;
    delete param.properties;

    if (param.type === 'object') {
      param.type = 'string';
      param.description += '\n Parameter string contains a JSON encoded object. See POST-method for details';
    }

    return param;
  });

  // Bind both get and post methods.
  return {
    post: {
      tags: spec.tags,
      description: spec.description,
      parameters: [request],
      responses: responses
    },

    get: {
      tags: spec.tags,
      description: spec.description,
      parameters: params,
      responses: responses
    }
  };
}

/**
 * Converts parameterGroups to parameters.
 *
 * ParameterGroups are not supported by the swagger specification, so we need to map them to parameters to get valid
 * specs.
 *
 * @param paths
 * @param parameterGroups
 * @returns {Object}
 */
export function parameterGroupToParameters(paths, parameterGroups) {
  for (const path in paths) {
    for (const method in paths[path]) {
      const {parameterGroup, parameters = []} = paths[path][method];
      if (parameterGroup && parameterGroups[parameterGroup]) {
        paths[path][method].parameters = parameters.concat(parameterGroups[parameterGroup]);
        delete paths[path][method].parameterGroup;
      }
    }
  }
  return paths;
}

/**
 * This function constructs API-paths from the YAML spec.
 * @param {Object} specs
 * @returns {Object}
 */
export function specToPaths(specs) {
  let paths = specs.paths || {};
  const defaultProperties = specs.defaultProperties;

  for (const key in defaultProperties) {
    if (defaultProperties[key].noSwag) {
      delete defaultProperties[key];
    }
  }

  for (const method in specs.api) {
    if (specs.api.hasOwnProperty(method)) {
      paths[`/${method}`] = apiMethodIterator(method, specs);
    }
  }

  return paths;
}
