'use strict';

let testUtils = React.addons.TestUtils;
let FrontPage = require('../client/frontpage/frontpage.react');

describe('Frontpage', () => {
  let container;
  let instance;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    instance = React.render(<FrontPage />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Logo', () => {
    it('Logo should be visible', () => {
      let node = React.findDOMNode(instance);
      expect(container.innerText).toBe('HEST');
    });
  });
});
