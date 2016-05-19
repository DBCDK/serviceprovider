// # Quick start guide to the open platform
//
// This is an introduction to getting started with the open platform.
//
// To make sure all examples etc. works, this 
//

load_utility_code();
// # Boilerplate code
// 
// This guide is written as a literate JavaScript program,
// to make sure that all examples works.
//
// The utility functions used above, is therefore implemented here
// for completeness.

function GET(url, o) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        resolve(xhr.response);
      }
    }
    xhr.send();
  });
}
