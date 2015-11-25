'use strict';

/**
 * @file
 * Layout of the content of a news page
 *
 * the body property contains html and is inserted as dangerouslySetInnerHTML, It also contains styling
 * that might need to be cleaned up.
 */

import React from 'react';

export default class NewsPageLayout extends React.Component {
  render() {
    return (
      <div className={`news-page clearfix`} >
        <h1 className="headline" >{this.props.title}</h1>

        <div className="image" >
          {this.props.image &&
          <img alt={this.props.title} className='news-item-image' src={`data:image/png;base64,${this.props.image}`} />
          }
        </div>
        <div className="lead" >{this.props.lead}</div>
        {/* eslint-disable */}
        <div className="body" dangerouslySetInnerHTML={{__html: this.props.body}} />
        {/* eslint-enable */}
      </div>
    );
  }
}

NewsPageLayout.displayName = 'NewsItemPageLayout';
NewsPageLayout.propTypes = {
  body: React.PropTypes.string,
  image: React.PropTypes.string,
  lead: React.PropTypes.string,
  title: React.PropTypes.string
};
