const {traverseAll} = require('./storage-traverser');

traverseAll(async doc => {
  // DO STUFF TO EACH DOC HERE
  console.log(doc._id);
});
