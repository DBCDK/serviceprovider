'use strict';

import React from 'react';
import LibraryAffiliateDropDownActions from './LibraryAffiliatesDropDown.action.js';
import LibraryAffiliateDropDownStore from './LibraryAffiliatesDropDown.store';

export default class LibraryAffiliatesDropDown extends React.Component {
  constructor(props) {
    super();

    this.state = {
      affiliates: LibraryAffiliateDropDownStore.getInitialState(),
      selected: props.pickupAgency
    };

    this.unsubscribe = [
      LibraryAffiliateDropDownStore.listen(() => this.setState({affiliates: LibraryAffiliateDropDownStore.store}))
    ];
  }

  componentDidMount() {
    LibraryAffiliateDropDownActions.getLibraryAffiliatesForAgency(this.props.pickupAgency);
    LibraryAffiliateDropDownActions.libraryAffiliateSelected({id: this.props.pickupAgency, name: this.props.pickupAgency});
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  selectionWasChanged() {
    const e = this.refs.librarySelector;
    const value = e.options[e.selectedIndex].value;
    const text = e.options[e.selectedIndex].text;
    this.setState({selected: value});
    LibraryAffiliateDropDownActions.libraryAffiliateSelected({id: value, name: text});
  }

  render() {
    const affiliate_options = this.state.affiliates.libraries.map((library) => {
      return (<option key={library.id} value={library.id}>{library.name}</option>);
    });

    return (
      <span className='order--library-affiliate-list-drop-down'>
        <select defaultValue={this.props.pickupAgency} onChange={this.selectionWasChanged.bind(this)} ref={"librarySelector"}>
          {affiliate_options}
        </select>
      </span>
    );
  }
}

LibraryAffiliatesDropDown.displayName = 'LibraryAffiliatesDropDown.component';
LibraryAffiliatesDropDown.propTypes = {
  pickupAgency: React.PropTypes.string.isRequired
};
