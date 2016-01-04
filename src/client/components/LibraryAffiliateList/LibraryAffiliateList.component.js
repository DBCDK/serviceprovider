'use strict';

/**
 * @file
 * Shows a list of libraries from the ddbContent service
 *
 * @usage
 * <LibraryAffiliateList />
 */

import React from 'react';

import LibraryAffiliateListItem from './LibraryAffiliateListItem.component';
import BackButton from '../TopNavigation/BackButton.js';

import LibrariesStore from '../../stores/Libraries.store.js';
import LibrariesActions from '../../actions/Libraries.actions';

export default class LibraryAffiliateList extends React.Component {
  constructor() {
    super();

    this.state = {
      affiliates: LibrariesStore.getInitialState()
    };

    this.unsubscribe = [
      LibrariesStore.listen(() => this.setState({affiliates: LibrariesStore.store}))
    ];
  }

  componentDidMount() {
    LibrariesActions.fetchAllAffiliates();
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  goBack() {
    history.back(-1);
  }

  render() {
    let libraries = [];
    this.state.affiliates.libraries.forEach((library) => {
      libraries.push(
        <LibraryAffiliateListItem
          address={library.address}
          city={library.city}
          description={library.description}
          key={library.id}
          lead_description={library.lead_description}
          list_images={library.list_images}
          opening_hours={library.opening_hours}
          postal_code={library.postal_code}
          title={library.title}
          title_images={library.title_images}
        />
      );
    });

    return (
      <div className='libraries'>
        <BackButton />
        {libraries}
      </div>
    );
  }
}

LibraryAffiliateList.displayName = 'LibraryAffiliateList.component';
LibraryAffiliateList.propTypes = {};
