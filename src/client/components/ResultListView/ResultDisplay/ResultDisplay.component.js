'use strict';

/**
 * @file
 * Component that renders a result display.
 * The layout of the result display can be optional provided through the layout props.
 */

import React from 'react';
import LoadMore from './LoadMore.component.js';
import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';

import DisplayResultStandardLayout from './ResultDisplayStandardLayout.component';

/**
 * Main component for presenting search result
 */
const ResultDisplay = React.createClass({
  displayName: 'ResultDisplay',

  propTypes: {
    coverImage: React.PropTypes.object,
    hasMore: React.PropTypes.bool,
    layout: React.PropTypes.func,
    loadMore: React.PropTypes.func,
    loader: React.PropTypes.element,
    pending: React.PropTypes.bool,
    result: React.PropTypes.array.isRequired
  },

  render() {
    const {loader, pending, result, hasMore, loadMore} = this.props;
    const loadMoreButton = (hasMore && !pending) ? <LoadMore button={'Se flere'} update={loadMore} /> : null;

    const workElement = result.map((work, i) => {
      return (
        <BibliographicData
          coverImage={this.props.coverImage}
          creator={work.creator}
          identifiers={work.identifiers}
          key={i}
          title={work.title}
          workType={work.workType}
        />);
    });

    const Layout = this.props.layout || DisplayResultStandardLayout;

    return (
      <Layout loadMoreButton={loadMoreButton} loader={loader} workElement={workElement}/>
    );
  }
});

export default ResultDisplay;
