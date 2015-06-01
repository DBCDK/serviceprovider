'use strict';

import 'babel-core/polyfill';

let context = require.context('./src', true, /\.test\.js?$/);
context.keys().forEach(context);
