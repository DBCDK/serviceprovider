import EntityRequest from './EntityRequest';

/**
 * Create a map of values between Elvis and Serviceprovider. Using the schema definition as default, and override
 * specified values.
 *
 * @param schema {Object} Schema definition.
 * @param remap {Object} Values to override.
 * @returns {Object} Map.
 */
function createMap(schema, remap) {
  const schemaMap = {};
  // Map property keys to values as default.
  Object.keys(schema.properties).forEach(key => {schemaMap[key] = key;});

  // Override with remap values.
  return Object.assign(schemaMap, remap);
}

/**
 * Add CRUD capabilities to Entity type.
 *
 * @param type {String} Entity type e.g. group.
 * @param router {Object} Router add CRUD methods to.
 * @param utils {Object} Object for mapping and validating values between Elvis and Serviceprovider objects.
 * @returns {Object} Router.
 */
export default function createCRUD(elvisType, type, router, remap, schema) {

  const request = (req) => {

    return new EntityRequest(type, elvisType, req.communityRequest, createMap(schema, remap), schema);
  };
  // Get list
  router.get('/', async (req, res) => res.json(await request(req, res).getList(req.query)));

  // Get by id
  router.get('/:id', async (req, res) => res.json(await request(req, res).get(req.query, req.params.id)));

  // Create
  router.post('/', async (req, res) => res.json(await request(req, res).post(req.query, req.body)));

  // Update
  router.put('/:id', async (req, res) => res.json(await request(req, res).put(req.query, req.params.id, req.body)));

  // delete
  router.delete('/:id', async (req, res) => res.json(await request(req, res).delete(req.query, req.params.id, req.body.profileId)));

  return router;
}
