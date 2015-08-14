'use strict';

let context = require.context('./src/components', true, /\.test\.js?$/);
context.keys().forEach(context);
