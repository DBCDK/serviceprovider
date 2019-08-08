const client = require('./list.pgclient');

module.exports = async (request, context) => {
  try {
    if (request.aggregationType === 'list') {
      const result = await client.find(request);
      return {statusCode: 200, data: result};
    }
    return {
      statusCode: 400,
      error: `Unsupported aggregationType. Supported aggregationType: list`
    };
  } catch (e) {
    if (e.statusCode) {
      return e;
    }
    throw e;
  }
};
