'use strict';

import OpenAgency from '../client.js';

describe('Test OpenAgency Client', () => {
  it('Dummy OpenAgency test for querying search', function(done) {
    const timeout = 10000;
    this.timeout(timeout);
    setTimeout(done, timeout);

    const config = {
      wsdl: 'http://openagency.addi.dk/2.22/?wsdl/openagency.wsdl',
      libraryType: 'Folkebibliotek'
    };

    done();

    const openAgency = OpenAgency(config);
    let result = openAgency.searchOpenAgency({
      query: 'aarhus'
    });


    /* eslint-disable no-unused-vars */
    result.then(function(searchResult) {
      /* eslint-enable no-unused-vars */
      // Mostly used for testing during dev, not actually a unit test
    });
  });

  it('Dummy OpenAgency test for querying agency ID', function(done) {
    const timeout = 10000;
    this.timeout(timeout);
    setTimeout(done, timeout);

    const config = {
      wsdl: 'http://openagency.addi.dk/2.22/?wsdl/openagency.wsdl'
    };

    const openAgency = OpenAgency(config);

    done();

    let result = openAgency.getOpenAgency({ // eslint-disable-line no-unused-vars
      id: [
        '710120'
      ]
    });
  });
});
