'use strict';

/**
 * @file
 * Renders the single row in the parent autocomplete component.
 */

import React from 'react';

var AutoCompleteRow = React.createClass({
  displayName: 'AutoCompleteRow',
  propTypes: {
    href: React.PropTypes.string,
    image: React.PropTypes.string,
    imageComp: React.PropTypes.element,
    text: React.PropTypes.string
  },

  getImage() {
    let img = null;
    if (this.props.imageComp) {
      img = <div className='autocomplete--row-image' >{this.props.imageComp}</div>;
    }
    else if (this.props.image || true) {
      img = (
        <div className='autocomplete--row-image'><img src={this.props.image} />
        </div>
      );
    }

    return img;
  },

  render() {
    const text = this.props.text || '';
    const imageElement = this.getImage();
    const href = this.props.href || '#';

    return (
      <div className='autocomplete--row' >
        <a href={href} >
          {imageElement}
          <div className='autocomplete--row-text' >{text}</div>
        </a>
      </div>
    );
  }
});

export default AutoCompleteRow;
