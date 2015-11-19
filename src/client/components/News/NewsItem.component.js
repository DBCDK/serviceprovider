'use strict';

// eslint-disable-line disable-file

import React from 'react';

export default class NewsItem extends React.Component {
  render() {
    return (
      <div className={`news-item clearfix ${this.props.zebra}`} >
        <div className="title" >{this.props.title}</div>
        <div className="image">
          {this.props.image &&
          <img alt={this.props.title} className='news-item-image' src={`data:image/png;base64,${this.props.image}`} />
          }
        </div>
        <div className="lead" >
          {this.props.lead}
        </div>
        <a className="link" href={`#${this.props.link}`} >Læs mere</a>
      </div>
    );
  }
}

NewsItem.displayName = 'NewsItem';
NewsItem.propTypes = {
  body: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  lead: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  zebra: React.PropTypes.string.isRequired
};
