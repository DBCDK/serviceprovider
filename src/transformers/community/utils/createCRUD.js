export default function createCRUD(type, router, utils) {
  const request = (req) => {
    return new EntityRequest(type, req.communityReguest, utils);
  };
  // Get list
  router.get('/', async (req, res) => res.json(await request(req, res).getAll()));

  // Get by id
  router.get('/:id', async (req, res) => res.json(await request(req, res).get(req.params.id)));

  // Create
  router.post('/', async (req, res) => res.json(await request(req, res).post(req.body)));

  // Update
  router.put('/:id', async (req, res) => res.json(await request(req, res).put(req.params.id, req.body)));

  // delete
  router.delete('/', async (req, res) => res.json(await request(req, res).delete(req.params.id, req.body.profileId)));

  return router;
}
