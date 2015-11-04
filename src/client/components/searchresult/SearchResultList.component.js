'use strict';

/**
 * @file
 * Container for the ResultDisplay Component
 */

import React from 'react';

// Components
import {CoverImage, ResultDisplay} from 'dbc-react-components';
import Loader from '../Loader.component.js';

const SearchResultList = React.createClass({
  displayName: 'SearchResultList',
  propTypes: {
    data: React.PropTypes.object.isRequired,
    layout: React.PropTypes.func,
    loadMore: React.PropTypes.func
  },

  render() {
    const coverImage = {
      component: CoverImage,
      noCoverUrl: {
        appendWorkType: true,
        url: `/covers/no-cover-image-[WORKTYPE].png`
      },
      prefSize: 'detail_500'
    };

    return (
      <ResultDisplay
        coverImage={coverImage}
        hasMore={this.props.data.results.info.more === 'true'}
        layout={this.props.layout}
        loadMore={this.props.loadMore}
        loader={<Loader pending={this.props.data.results.pending} />}
        noResultsText=''
        pending={this.props.data.results.pending}
        result={this.props.data.results.result}
      />
    );
  }
});

export default SearchResultList;
