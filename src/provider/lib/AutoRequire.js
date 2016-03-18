'use strict';

/**
 * @file
 * Module for requiring all modules in a folder with a specified namespace
 */

import path from 'path';
import walker from 'walk';

/**
 * Traverses the filetree under ./transformers and looks for files named
 * transform.js. All files found with that name are considered a transform and
 * added to the pool of transforms that later will be passed to the
 * disspatchers.
 */
function discoverFiles(folder, namespace) {
  let files = [];
  const walkOptions = {
    listeners: {
      file: (root, fileStats, next) => {
        if (fileStats.name.indexOf(namespace) >= 0) {
          files.push(path.join(root, fileStats.name));
        }
        next();
      },
      errors: (root, nodeStatsArray, next) => {
        if (nodeStatsArray[0].error) {
          console.error(nodeStatsArray[0].error); // eslint-disable-line
          console.error(' at: ' + path.join(root, nodeStatsArray[0].name)); // eslint-disable-line
        }
        next();
      }
    }
  };
  walker.walkSync(folder, walkOptions);
  return files;
}

/**
 * Returns required modules in a folder specific namespace
 *
 * @param {String} folder Folder to search
 * @param {String} namespace filename pattern e.g 'transform.js'. Not a regex
 * @returns {Array}
 */
export default function autoRequire(folder, namespace) {
  return discoverFiles(folder, namespace).map(require);
}
