'use strict';
let React = require('react');

let FrontPage = React.createClass({
  displayName: 'LogoContainer',
  render: () => {
    return (
      <div>
        <img src='/logo.png' />
      </div>
    );
  }
});

module.exports = FrontPage;
