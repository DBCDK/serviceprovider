'use strict';

let React = require('react/addons');
let TestUtils = React.addons.TestUtils;
let expect = require('chai').expect;

let Logo = require('../components/logo/logo.react');

describe('Logo', () => {
  let instance;

  beforeEach(() => {
    let renderedComponent = TestUtils.renderIntoDocument(<Logo />);
    let logo = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'img');
    instance = logo.getDOMNode();
  });

  describe('Verify logo', () => {
    it('Logo should be visible', () => {
      expect(instance.outerHTML).to.contain('<img');
      expect(instance.outerHTML).to.contain('src="/logo.png"');
    });
  });
});
