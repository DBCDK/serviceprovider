'use strict';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {expect} from 'chai';
import ResultDisplay from '../ResultDisplay.component';

describe('Test DisplayResult Component', () => {
  it('Assert correct rendering of ResultDisplay component', function() {

    let rendered = TestUtils.renderIntoDocument(<ResultDisplay result={[]} />);

    let result = React.findDOMNode(rendered);

    expect(React.findDOMNode(result).className).to.contain('container');

  });
});
