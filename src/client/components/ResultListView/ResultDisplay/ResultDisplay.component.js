'use strict';

/**
 * @file
 * Component that renders a result display.
 * The layout of the result display can be optional provided through the layout props.
 */

import React from 'react';

// Components
import LoadMore from './LoadMore.component.js';
import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';
import DisplayResultStandardLayout from './ResultDisplayStandardLayout.component';

/**
 * Main component for presenting search result
 */
export default class ResultDisplay extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {pending, result, hasMore, loadMore} = this.props;
    const loadMoreButton = (hasMore && !pending) ?
      <LoadMore button={'Se flere'} update={loadMore} /> : null;

    const workElement = result.map((work, i) => {
      return (
        <BibliographicData
          creator={work.creator}
          identifiers={work.identifiers}
          key={i}
          title={work.title}
          workType={work.workType}
        />);
    });

    const Layout = this.props.layout || DisplayResultStandardLayout;

    return (
      <Layout loadMoreButton={loadMoreButton} pending={pending} workElement={workElement} />
    );
  }
}

ResultDisplay.displayName = 'ResultDisplay';
ResultDisplay.propTypes = {
  hasMore: React.PropTypes.bool,
  layout: React.PropTypes.func,
  loadMore: React.PropTypes.func,
  pending: React.PropTypes.bool,
  result: React.PropTypes.array.isRequired
};
