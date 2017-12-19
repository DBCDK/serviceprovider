// Return the status from the service platform
//
// Partial implementation / in progress, see #875
//
const {log} = require('../utils.js');
const {version} = require('../../package.json');

export default async (request, context) => {
  return {statusCode: 200, data: {version}};
};
