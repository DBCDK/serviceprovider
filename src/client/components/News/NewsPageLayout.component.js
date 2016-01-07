'use strict';

/**
 * @file
 * Layout of the content of a news page
 *
 * the body property contains html and is inserted as dangerouslySetInnerHTML, It also contains styling
 * that might need to be cleaned up.
 */

import React from 'react';
import BackButton from '../TopNavigation/BackButton.js';
import WorkList from '../Work/WorkList.component.js';

export default class NewsPageLayout extends React.Component {

  goBack() {
    history.back(-1);
  }

  getImage() {
    return this.props.titleImage || this.props.image || null;
  }

  render() {
    const image = this.getImage();
    return (
      <div className={`news-page clearfix`} >
        <BackButton />
        <div className="news-page--content clearfix" >
          <h1 className="headline" >{this.props.title}</h1>
          <div className="image" >
            {image &&
            <img alt={this.props.title} className='news-item-image'
                 src={`http://rest.filmstriben.dbc.inlead.dk/web/${image}`} />
            }
          </div>
          <div className="lead" >{this.props.lead}</div>
          {/* eslint-disable */}
          <div className="body" dangerouslySetInnerHTML={{__html: this.props.body}} />
          {/* eslint-enable */}
        </div>
        {this.props.works.length &&
        <div className="news-page--workList" >
          <WorkList works={this.props.works} title="Relaterede poster" />
        </div>
        || ''
        }
      </div>
    );
  }
}

NewsPageLayout.displayName = 'NewsItemPageLayout';
NewsPageLayout.propTypes = {
  body: React.PropTypes.string,
  image: React.PropTypes.string,
  lead: React.PropTypes.string,
  title: React.PropTypes.string,
  titleImage: React.PropTypes.string,
  works: React.PropTypes.array
};
