'use strict';

/**
 * @file
 * Creates a list of tokens
 *
 * This component is only used internally for the TokenSearchField
 *
 * Properties:
 * query: array of strings
 * remove: callback function for removing elements with a certain index
 *
 */

import React, {PropTypes} from 'react';
import Token from './Token.component.js';

/**
 * Get a random color. This function is used for development only.
 * Should be exchanged with a colorscheme
 *
 * @returns {string}
 * @private
 */
function _getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Return a color depending on the type
 *
 * @param type
 * @returns {*}
 */
function getColor(type) {
  switch (type) {
    case 'text':
      return '#222';
    default:
      return '#61b6d9';
  }
}

export default React.createClass({
  displayName: 'TokenList.component',
  propTypes: {
    query: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    translations: PropTypes.object
  },

  getInitialState() {
    let queries = this.props.query.map((query)=> {
      return {
        text: query,
        color: _getRandomColor()
      };
    });
    return {
      query: queries
    };
  },

  getTranslation(type, text) {
    if (this.props.translations && type !== 'text' && this.props.translations[text]) {
      return this.props.translations[text];
    }

    return text;
  },

  render() {
    const {query, remove} = this.props;

    // The order of tokens is reversed to handle that last token should be visible.
    // In the CSS direction is set to rlt, reversing the order again
    const tokens = query.map((element, index)=> {
      return (
        <Token
          color={getColor(element.type)}
          index={element.index}
          key={index}
          remove={remove.bind(null, element)}
          text={this.getTranslation(element.type, element.value)}
          />
      );
    }).reverse();

    return (
      <div className='tokenlist' >
        {tokens}
      </div>
    );
  }
});
