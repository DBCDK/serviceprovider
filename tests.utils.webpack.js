'use strict';

let context = require.context('./src/utils', true, /\.test\.js?$/);
context.keys().forEach(context);
