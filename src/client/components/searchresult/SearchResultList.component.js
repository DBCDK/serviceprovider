'use strict';

/**
 * @file
 * Container for the ResultDisplay Component
 */

import React from 'react';
import {rewriteCoverImageUrl} from '../../../utils/CoverImage.util.js';

// Components
import {CoverImage, ResultDisplay} from 'dbc-react-components';
import Loader from '../Loader.component.js';

export default React.createClass({
  displayName: 'SearchResultList.component',
  propTypes: {
    data: React.PropTypes.object.isRequired,
    loadMore: React.PropTypes.func
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
        loadMore={this.props.loadMore}
        loader={<Loader pending={this.props.data.results.pending} />}
        noResultsText=''
        pending={this.props.data.results.pending}
        result={this.props.data.results.result}
        />
    );
  }
});
