/**
 * @file
 * Postgres client for list aggregations.
 *
 * This is responsible for maintaining the storage_list_aggr table
 *
 */
const {knex} = require('../../knex.js');

async function deleteType(typeId) {
  await knex('storage_list_aggr')
    .where('type', typeId)
    .del();
}

async function deleteOwner(ownerId, typeId) {
  await knex('storage_list_aggr')
    .where({owner: ownerId, type: typeId})
    .del();
}
async function updateOwner(obj, typeId) {
  await knex('storage_list_aggr')
    .where({owner: obj._owner, type: typeId})
    .update({
      owner_name: obj.name || '',
      owner_image: obj.image || ''
    });
}
async function upsertList(list) {
  // this is a raw knex query, since knex doesn't support upserts
  await knex.raw(
    `insert into "storage_list_aggr" (
      "id", "type", "owner", "owner_name", "owner_image", 
      "list_title", "list_description", "list_image", "num_items", 
      "num_comments", "num_follows", "created", "modified", "pids")
    values (
      :id, :type, :owner, :owner_name, :owner_image, :list_title,
      :list_description, :list_image, :num_items, :num_comments,
      :num_follows, :created, :modified, :pids)
    ON CONFLICT (id) DO UPDATE
    SET 
      "owner_name" = EXCLUDED.owner_name,
      "owner_image" = EXCLUDED.owner_image,
      "list_title" = EXCLUDED.list_title,
      "list_description" = EXCLUDED.list_description,
      "list_image" = EXCLUDED.list_image,
      "num_items" = EXCLUDED.num_items,
      "num_comments" = EXCLUDED.num_comments,
      "num_follows" = EXCLUDED.num_follows,
      "modified" = EXCLUDED.modified,
      "created" = EXCLUDED.created,
      "pids" = EXCLUDED.pids`,
    list
  );
}
async function deleteList(listId) {
  await knex('storage_list_aggr')
    .where('id', listId)
    .del();
}

const uuidRegExp = new RegExp(
  '^xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx$'.replace(/x/g, '[0-9a-fA-F]')
);

const SORT_OPTIONS = [
  'num_items',
  'num_follows',
  'num_comments',
  'created',
  'modified'
];

async function find({type, sort = 'created', pid, limit = 10, offset = 0}) {
  if (!type || !type.match(uuidRegExp)) {
    throw {statusCode: 400, error: 'Invalid type'};
  }
  if (!SORT_OPTIONS.includes(sort)) {
    throw {
      statusCode: 400,
      error: `Unsupported sort. Supported sort: ${SORT_OPTIONS.join(', ')}`
    };
  }
  const query = knex('storage_list_aggr')
    .select('*')
    .where({type: type});

  if (pid) {
    query.whereRaw(`pids @> :pid`, {pid: JSON.stringify(pid)});
  }
  query.orderBy(sort, 'desc');
  query.limit(limit);
  query.offset(offset);
  const result = await query;
  result.forEach(element => {
    element._type = element.type;
    element._id = element.id;
    element._owner = element.owner;
    element.cf_type = 'list';
    element.cf_created = element.created.getTime() / 1000;
    element.cf_modified = element.modified.getTime() / 1000;

    delete element.created;
    delete element.modified;
    delete element.id;
    delete element.type;
    delete element.owner;
  });
  return result;
}

async function initDB() {
  if (!(await knex.schema.hasTable('storage_list_aggr'))) {
    await knex.schema.createTable('storage_list_aggr', table => {
      table.uuid('id').notNullable();
      table
        .uuid('type')
        .notNullable()
        .index();
      table.string('owner').index();
      table.string('owner_name');
      table.string('owner_image');
      table.string('list_title');
      table.string('list_description');
      table.string('list_image');
      table
        .integer('num_items')
        .defaultTo(0)
        .index();
      table
        .integer('num_comments')
        .defaultTo(0)
        .index();
      table
        .integer('num_follows')
        .defaultTo(0)
        .index();
      table.timestamp('created').index();
      table.timestamp('modified').index();
      table.jsonb('pids').index(null, 'gin');
      table.primary(['id']);
    });
  }
}
initDB();

module.exports = {
  deleteType,
  deleteOwner,
  updateOwner,
  upsertList,
  deleteList,
  find
};
