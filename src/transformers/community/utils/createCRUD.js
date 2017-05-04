import {createMap} from './createMap';

/**
 * Add CRUD capabilities to Entity type.
 *
 * @param type {String} Entity type e.g. group.
 * @param router {Object} Router add CRUD methods to.
 * @param utils {Object} Object for mapping and validating values between Elvis and Serviceprovider objects.
 * @returns {Object} Router.
 */
export default function createCRUD(elvisType, type, router, remap, schema) {

   // Setup CRUD transport
  router.all('/:id?', (req, res) => {
    const provider = req.app.get('serviceProvider');
    const context = req.context;
    context.crud = true;

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {
        _meta: {
          type,
          elvisType,
          schemaMap: createMap(schema, remap),
          schema
        }
      }
    );

    let event;
    switch (req.method) {
      case 'GET': {
        event = req.params.id ? 'getEntity' : 'listEntities';
        break;
      }
      case 'PUT': {
        event = 'updateEntity';
        break;
      }
      case 'POST': {
        event = 'createEntity';
        break;
      }
      case 'DELETE': {
        event = 'deleteEntity';
        break;
      }
      default: {
        break;
      }
    }

    provider.execute(event, query, context).then(result => res.json(result));
  });

  return router;
}
