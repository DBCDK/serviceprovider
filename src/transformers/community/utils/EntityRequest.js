import {validate} from 'jsonschema';
import mapper from 'object-mapper';
import {invert} from 'lodash';
import {getRelatedModel} from '../include_related';

/**
 * @file
 * Class for making requests to Elvis. Exposes methods for CRUD request.
 *
 * @todo
 * Extend with methods for making nested queries.
 */

const QueryTypeMap = {
  entity: {
    single: 'Entity',
    list: 'Entities'
  },
  action: {
    single: 'Action',
    list: 'Actions'
  },
  profile: {
    single: 'Profile',
    list: 'Profiles'
  }
};

const orderPossibilities = ['descending', 'ascending'];

export function communityRequest(context, params) {
  const id = context.get('communityservice.id', true);
  const baseurl = context.get('services.communityservice', true);

  if (!id) {
    throw 'Community-API is not available for the current client. ' +
      'Client needs to be configured with a valid community ID';
  }

  if (!baseurl) {
    throw 'Community-API is not available for the current client. ' +
      'Client needs to be configured with a valid community service url';
  }

  const name = `${baseurl}/community/${id}/${params.path}`;
  delete params.path;

  return context.request(name, params);
}

export default class EntityRequest {
  constructor(type, elvisType, call, map, schema) {
    this._elvisType = elvisType;
    this._type = type;
    this._call = call;
    this._map = map;
    this._schema = schema;
  }

  _mapperToElvis(data) {
    return mapper(data, this._map);
  }

  _mapperFromElvis(data) {
    return mapper(data, invert(this._map));
  }

  /**
   * Return response (json string or object) as object.
   *
   * @param response {String|Object}
   * @returns {Object}
   * @private
   */
  _parseResponse(response) {
    return (typeof response === 'string' && JSON.parse(response)) || response;
  }

  /**
   * Create Response object.
   *
   * @param data {Object}
   * @param errors {Array}
   * @returns {Object}
   * @private
   */
  _createResponse(data = {}, errors = []) {
    if (errors && errors.length) {
      return this._parseErrors(errors);
    }

    // Map activities to an object
    // Triggers on activity-feed call
    Object.keys(data).forEach(dataKey => {
      if (dataKey.indexOf('activity_') === 0) {
        if (!data.activity) {
          data.activity = {};
        }

        data.activity[dataKey.replace('activity_', '')] = data[dataKey];
        delete data[dataKey];
      }
    });

    return {
      status: 200,
      data: data,
      errors: errors
    };
  }

  /**
   * Convert errors to response.
   * @param errors
   * @returns {{status: (*|number), error: (boolean|*), data: Array}}
   * @private
   */
  _parseErrors(errors) {
    const error = (Array.isArray(errors) && errors[0]) || errors;
    const status = error.status || 500;
    delete error.status;
    return {
      status,
      error: error.error || error,
      data: []
    };
  }

  /**
   * Validate object against utility method.
   *
   * @param object
   * @returns {Object|null} Returns response object if validation errors exists. Otherwise null.
   * @private
   */
  _validate(data, ignore_required = false) {
    const schema = Object.assign({}, this._schema);
    if (ignore_required && schema.required) {
      delete schema.required;
    }
    const validateErrors = validate(data, schema).errors;
    if (validateErrors.length) {
      return {
        status: 400,
        errors: validateErrors
          .map(o => String(o.stack).replace(/^instance\.?/, ''))
          .join('\n'),
        data: []
      };
    }
    return null;
  }

  /**
   * Check if an action already exists.
   *
   * @param json
   * @returns {boolean}
   */
  async actionExists(json) {
    const validateJson = {
      Actions: {
        type: this._type,
        profile_ref: json.profile_ref || null,
        entity_ref: json.entity_ref || null,
        owner_id: json.owner_id
      },
      Include: {id: 'id'},
      Limit: 1
    };
    const {data} = await this._request('query', 'post', {json: validateJson});
    return Number(data.Total) > 0;
  }

  async objectExists(elvisType, id, type = null) {
    const relationQuery = {
      [elvisType]: {id},
      Include: {id: 'id'}
    };

    if (type) {
      relationQuery[elvisType].type = type;
    }
    const {data} = await this._request('query', 'post', {json: relationQuery});

    return data && data.id === id;
  }

  /**
   * Check if relations exists and are of right type.
   *
   * @param json
   * @returns {object}
   * @private
   */
  async _validateRelations(json) {
    if (this._type === 'follow' || this._type === 'like') {
      if (await this.actionExists(json)) {
        return this._createResponse({}, [
          {error: `${this._type} already exists`, status: 400}
        ]);
      }
    }
    if (
      this._type === 'comment' &&
      !(await this.objectExists('Entity', json.entity_ref, 'post'))
    ) {
      return this._createResponse({}, [
        {error: `post with id ${json.entity_ref} does not exist`, status: 400}
      ]);
    } else if (
      this._type === 'post' &&
      !(await this.objectExists('Entity', json.entity_ref, 'group'))
    ) {
      return this._createResponse({}, [
        {error: `group with id ${json.entity_ref} does not exist`, status: 400}
      ]);
    } else if (
      json.profile_ref &&
      !(await this.objectExists('Profile', json.profile_ref))
    ) {
      return this._createResponse({}, [
        {
          error: `profile with id ${json.profile_ref} does not exist`,
          status: 400
        }
      ]);
    } else if (
      json.entity_ref &&
      !(await this.objectExists(
        'Entity',
        json.entity_ref,
        json.attributes.reference.type
      ))
    ) {
      return this._createResponse({}, [
        {
          error: `${json.attributes.reference.type} with id ${
            json.entity_ref
          } does not exist`,
          status: 400
        }
      ]);
    }

    return {};
  }

  _getCounts(name, count) {
    const countQuery = {};
    if (typeof count === 'string') {
      const relatedModel = getRelatedModel(name, count);
      if (relatedModel.Entities || relatedModel.Entity) {
        countQuery.CountEntities = relatedModel.Entities || relatedModel.Entity;
      }

      if (relatedModel.Profiles || relatedModel.Profile) {
        countQuery.CountProfiles =
          relatedModel.Profiles || relatedModel.Profile;
      }

      if (relatedModel.Action || relatedModel.Actions) {
        countQuery.CountActions = relatedModel.Action || relatedModel.Actions;
      }
    }

    return countQuery;
  }

  _filterInclude(Include = {}, filter = []) {
    if (Array.isArray(filter)) {
      filter.forEach(filterKey => {
        if (Include[filterKey]) {
          delete Include[filterKey];
        }
      });
    }

    return Include;
  }

  /**
   * Generates an Include object for the JSON sent to the community service.
   * Can take nested objects and different input types.
   * It also filters out any unwanted parameters.
   * @param include
   * @param filter
   * @param _map
   * @returns {*}
   * @private
   */
  _getInclude(include = {}, filter = [], name = '', _map = {}) {
    const Include = Object.assign({}, _map);
    if (typeof include === 'string') {
      try {
        const reqInclude = JSON.parse(include);
        include = Array.isArray(reqInclude) ? reqInclude : [reqInclude];
      } catch (e) {
        include = [include];
      }
    } else if (Array.isArray(include)) {
      include = include;
    }

    if (Array.isArray(include)) {
      include.forEach(item => {
        if (typeof item === 'string') {
          const related = getRelatedModel(name, item);
          if (related) {
            Include[item] = related;
          }
        } else if (typeof item === 'object' && item.name) {
          const related = getRelatedModel(
            name,
            item.name,
            item.limit,
            item.offset
          );
          if (related) {
            if (item.include) {
              if (typeof item.include === 'string') {
                item.include = [item.include];
              }

              related.Include = Object.assign(
                {},
                related.Include,
                this._getInclude(item.include, item.filter, item.name)
              );
            }
            related.Include = this._filterInclude(related.Include, item.filter);

            Include[item.name] = related;
            if (item.counts) {
              item.counts =
                typeof item.counts === 'string' ? [item.counts] : item.counts;
              Array.isArray(item.counts) &&
                item.counts.forEach(count => {
                  const additional = {};
                  additional[`${count}Count`] = this._getCounts(
                    item.name,
                    count
                  );
                  Include[item.name].Include = Object.assign(
                    {},
                    Include[item.name].Include,
                    additional
                  );
                });
            }
          }
        }
      });
    }

    return this._filterInclude(Include, filter);
  }

  /**
   * Make request to Elvis.
   *
   * @param path {String} Endpoint in Elvis
   * @param method {String} post|get|put|delete
   * @param params {Object} parameters object. most often json or empty.
   * @returns {Promise|Object}
   * @private
   */
  async _request(path, method = 'get', params = {}) {
    const options = Object.assign({path, method}, params);
    try {
      const response = await this._call(options);
      if (response.errors) {
        return response;
      }
      return this._parseResponse(response);
    } catch (error) {
      return {errors: error};
    }
  }

  async get(id, include = [], counts = []) {
    const selectorKey = QueryTypeMap[this._elvisType].list;
    const selector = {id: id};
    if (this._type) {
      selector.type = this._type;
    }
    const json = {
      [selectorKey]: selector,
      Limit: 1,
      Include: this._getInclude(
        include,
        [],
        this._type || this._elvisType,
        this._map
      )
    };

    if (typeof counts === 'string') {
      counts = [counts];
    }

    counts.forEach(count => {
      json.Include[`${count}Count`] = this._getCounts(
        this._type || this._elvisType,
        count
      );
    });

    const {data, errors} = await this._request('query', 'post', {json});
    return this._createResponse(data && data.List[0], errors);
  }

  async getSingleProperty(_selector) {
    const selectorKey = QueryTypeMap[this._elvisType].single;
    const selector = _selector;
    const include = this._map;

    if (this._elvisType === 'entity') {
      selector.type = this._type;
    }

    const json = {
      [selectorKey]: selector,
      Include: include
    };

    const {data, errors} = await this._request('query', 'post', {json});
    return this._createResponse(this._mapperFromElvis(data), errors);
  }

  async post(object) {
    const validationError = this._validate(object);
    if (validationError) {
      return validationError;
    }
    const json = this._mapperToElvis(object);
    if (this._elvisType === 'action' && json.attributes.reference) {
      if (json.attributes.reference.type === 'profile') {
        json.profile_ref = json.attributes.reference.id;
      } else {
        json.entity_ref = json.attributes.reference.id;
      }
    }
    if (this._type) {
      json.type = this._type;
    }

    const relationExists = await this._validateRelations(json);
    if (relationExists.error) {
      return relationExists;
    }

    const {data, errors} = await this._request(this._elvisType, 'post', {json});
    return this._createResponse(this._mapperFromElvis(data), errors);
  }

  async put(id, object) {
    const validationError = this._validate(object, true);
    if (validationError) {
      return validationError;
    }

    const json = this._mapperToElvis(object);
    const {data, errors} = await this._request(
      `${this._elvisType}/${id}`,
      'put',
      {json}
    );
    return this._createResponse(this._mapperFromElvis(data), errors);
  }

  async delete(id, modified_by) {
    const json = {modified_by};
    const {data, errors} = await this._request(
      `${this._elvisType}/${id}`,
      'put',
      {json}
    );
    return this._createResponse(this._mapperFromElvis(data), errors);
  }

  /**
   * Get all objects of type
   *
   * @returns {{status, data, errors}|*}
   */
  async getList(req) {
    let filter = [];
    const selectorKey = QueryTypeMap[this._elvisType].list;
    const selector = req.selector || {};
    if (this._type) {
      selector.type = this._type;
    }

    if (Array.isArray(req.filter)) {
      filter = req.filter;
    }

    if (typeof req.filter === 'string') {
      filter.push(req.filter);
    }

    const json = {
      [selectorKey]: selector,
      SortBy: 'id',
      Order: 'descending',
      Limit: 2,
      Offset: 0,
      Include: this._getInclude(
        req.include,
        filter,
        this._type || this._elvisType,
        this._map
      )
    };

    if (req.offset && !isNaN(parseFloat(req.offset)) && isFinite(req.offset)) {
      json.Offset = req.offset;
    }

    if (req.order && orderPossibilities.indexOf(req.order) >= 0) {
      json.Order = req.order;
    }

    if (
      typeof req.limit !== 'undefined' &&
      !isNaN(parseFloat(req.limit)) &&
      isFinite(req.limit)
    ) {
      json.Limit = req.limit;
    }

    if (typeof req.sort === 'string') {
      json.SortBy = req.sort;
    }

    if (typeof req.counts === 'string') {
      try {
        req.counts = JSON.parse(req.counts);
      } catch (er) {
        req.counts = [req.counts];
      }
    }

    if (Array.isArray(req.counts)) {
      req.counts.forEach(count => {
        json.Include[`${count}Count`] = this._getCounts(
          this._type || this._elvisType,
          count
        );
      });
    }

    const {data, errors} = await this._request('query', 'post', {json});
    return this._createResponse(data, errors);
  }
}
