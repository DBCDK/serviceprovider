

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
    default: {
      description: 'Response envelope',
      schema: {
        type: 'object',
        required: ['statusCode'],
        properties: {
          statusCode: {type: 'integer'},
          data: Object.assign({
            type: 'object',
            properties: {}
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
  const responses = createResponse(spec);

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
 * This function constructs API-paths from the YAML spec.
 * @param {PlainObject} specs
 * @returns {PlainObject}
 */
export function specToPaths(specs) {
  let paths = {};
  if (process.env.NODE_ENV !== 'production') {
    paths = specs.paths || {};
  }
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

