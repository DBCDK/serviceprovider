'use strict';

import React from 'react';
import LibraryAffiliateDropDownActions from './LibraryAffiliatesDropDown.action.js';
import LibraryAffiliateDropDownStore from './LibraryAffiliatesDropDown.store.js';

export default class LibraryAffiliatesDropDown extends React.Component {
  constructor(props) {
    super();

    this.state = {
      affiliates: LibraryAffiliateDropDownStore.getInitialState(),
      selected: props.pickupAgency
    };

    this.unsubscribe = [
      LibraryAffiliateDropDownStore.listen(() => this.setState({affiliates: LibraryAffiliateDropDownStore.store})),
      LibraryAffiliateDropDownActions.getLibraryAffiliatesForAgencyResponse.listen(() => {
        var options = this.refs.librarySelector.options;
        for (var i= 0; i<options.length; i++) {
          if (options[i].value===this.props.pickupAgency) {
            options[i].selected= true;
            break;
          }
        }
      })
    ];
  }

  componentDidMount() {
    LibraryAffiliateDropDownActions.getLibraryAffiliatesForAgency(this.props.pickupAgency);
    LibraryAffiliateDropDownActions.libraryAffiliateSelected({id: this.props.pickupAgency, name: this.props.pickupAgency});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pickupAgency !== this.props.pickupAgency) {
      LibraryAffiliateDropDownActions.getLibraryAffiliatesForAgency(this.props.pickupAgency);
    }
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
    if (this.props.onChangeCallback) {
      this.props.onChangeCallback({id: value, name: text});
    }
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
  onChangeCallback: React.PropTypes.func,
  pickupAgency: React.PropTypes.string.isRequired
};
