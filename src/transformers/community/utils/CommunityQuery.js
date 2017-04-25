/**
 *
 * @param filter
 */

function queryEntityParser({type = 'group', id= null, filters = {}, includes = [], limit = 10, offset= 0, maps}) {
  const query = {
    Entities: {type},
    Limit: limit,
    Offset: offset,
    Include: maps[type]
  };
  if (id) {
    query.Entities.id = id;
  }

  if (includes) {
    includes.forEach(element => {
      switch (element) {
        case 'posts':


        default:
      }
    });
  }

}