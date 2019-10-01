const {traverseAll, knex} = require('./storage-traverser');

traverseAll(async doc => {
  const oldCreated = doc._created
    ? new Date(Math.floor(doc._created.getTime() / 1000) * 1000).toISOString()
    : new Date().toISOString();

  const newCreated = doc.cf_created
    ? new Date(doc.cf_created * 1000).toISOString()
    : new Date(Math.floor(doc._version.getTime() / 1000) * 1000).toISOString();
  if (oldCreated !== newCreated) {
    // should update
    console.log(doc._id, newCreated, oldCreated);
    await knex('docs')
      .where({id: doc._id})
      .update({created: newCreated});
  }
});
