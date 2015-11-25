'use strict';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {expect} from 'chai';
import AutoComplete from '../AutoComplete.component.js';

describe('Test AutoComplete Component', () => {

  it('Assert hidden class to be added when visible:false', () => {
    const rendered = TestUtils.renderIntoDocument(<AutoComplete visible={false}/>);

    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');
  });

  it('Assert hidden class not to be added when visible:true', () => {
    const rendered = TestUtils.renderIntoDocument(<AutoComplete visible={true}/>); // eslint-disable-line react/jsx-boolean-value

    expect(rendered.getDOMNode().className).not.to.contain('autocomplete--container-hidden');
  });

  it('Assert hidden class to be added when visible:[is-anything-but-true]', () => {
    let rendered = TestUtils.renderIntoDocument(<AutoComplete visible={''}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={'1'}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={'0'}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={1}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={0}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');

    rendered = TestUtils.renderIntoDocument(<AutoComplete visible={'test'}/>);
    expect(rendered.getDOMNode().className).to.contain('autocomplete--container-hidden');
  });

  it('Assert no results found message when data is empty', () => {
    const rendered = TestUtils.renderIntoDocument(<AutoComplete errormessage="Ingen resultater fundet" visible={true}/>); // eslint-disable-line react/jsx-boolean-value
    expect(rendered.getDOMNode().innerHTML).to.contain('Ingen resultater fundet');
  });
});

