'use strict';

let React = require('react/addons');
let TestUtils = React.addons.TestUtils;
let expect = require('chai').expect;

let FrontPage = require('../components/frontpage/frontpage.react');

describe('Frontpage', () => {
  let instance;

  beforeEach(() => {
    let renderedComponent = TestUtils.renderIntoDocument(<FrontPage />);
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
