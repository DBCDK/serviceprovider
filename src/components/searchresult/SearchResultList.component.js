'use strict';

/**
 * @file
 * Container for the ResultDisplay Component
 */

import React from 'react';
import {rewriteCoverImageUrl} from '../../utils/CoverImage.util.js';

// Components
import {CoverImage, ResultDisplay} from 'dbc-react-components';
import Loader from '../Loader.component.js';

export default React.createClass({
  displayName: 'SearchResultList.component',
  propTypes: {
    actions: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired
  },

  render() {
    const coverImage = {
      component: CoverImage,
      noCoverUrl: {
        appendWorkType: true,
        url: `/covers/no-cover-image-[WORKTYPE].png`
      },
      prefSize: 'detail_500',
      rewriteImgUrl: rewriteCoverImageUrl
    };

    return (
      <ResultDisplay
        coverImage={coverImage}
        hasMore={this.props.data.results.info.more === 'true'}
        loadMore={this.props.actions.nextPage}
        loader={<Loader pending={this.props.data.results.pending} />}
        noResultsText=''
        pending={this.props.data.results.pending}
        result={this.props.data.results.result}
        />
    );
  }
});
