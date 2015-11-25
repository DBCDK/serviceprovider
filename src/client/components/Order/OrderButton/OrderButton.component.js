'use strict';
/**
 * @file
 * Provides an order button/online link rendering.
 */
import React from 'react';

import {findIndex} from 'lodash';

import OrderLink from '../OrderLink/OrderLink.component.js';

const OrderButton = React.createClass({
  displayName: 'OrderButton',

  propTypes: {
    favoriteLibraries: React.PropTypes.array,
    manifestations: React.PropTypes.array.isRequired,
    profile: React.PropTypes.object.isRequired,
    relations: React.PropTypes.array
  },

  getUserInfo(profile) {
    let userInfo = {
      agencyId: '',
      pickupAgencyId: '',
      borrowerId: ''
    };

    const favoriteLibraries = this.props.favoriteLibraries || [];

    if (profile.userIsLoggedIn === true) {
      if (favoriteLibraries.length === 1) {
        userInfo.agencyId = favoriteLibraries[0].libraryID;
        userInfo.pickupAgencyId = favoriteLibraries[0].agencyID;
        userInfo.borrowerId = favoriteLibraries[0].borrowerID;
      }
      else if (favoriteLibraries.length > 1) {
        const agencies = favoriteLibraries;
        const index = findIndex(agencies, 'default', 1);
        if (index > -1) {
          userInfo.agencyId = favoriteLibraries[index].libraryID;
          userInfo.pickupAgencyId = favoriteLibraries[index].agencyID;
          userInfo.borrowerId = favoriteLibraries[index].borrowerID;
        }
        else {
          userInfo.agencyId = favoriteLibraries[0].libraryID;
          userInfo.pickupAgencyId = favoriteLibraries[0].agencyID;
          userInfo.borrowerId = favoriteLibraries[0].borrowerID;
        }
      }
    }
    return userInfo;
  },

  getOrderLink(m, userInfo, manifestations, userIsLoggedIn, index) {
    const no_order_types = ['other', 'periodica', 'article'];
    const workTypeOrder = !(no_order_types.indexOf(m.workType) >= 0);

    const order_ids = [m.identifiers];

    return (
      <OrderLink
        agencyId={userInfo.agencyId}
        borrowerId={userInfo.borrowerId}
        coverImagePids={manifestations[0].identifiers}
        key={index}
        linkText={'Bestil ' + m.type}
        orderUrl={'/work' + m.order}
        pickupAgencyId={userInfo.pickupAgencyId}
        pids={order_ids}
        type={m.type}
        userIsLoggedIn={userIsLoggedIn}
        workTypeOrder={workTypeOrder}
      />
    );
  },

  getOnlineLink(relations, index, m) {
    const link = relations.map((r, i) => {
      if (r.type === 'dbcaddi:hasOnlineAccess') {
        if (r.collection.indexOf('150015-erelic') !== -1 || r.collection.indexOf('150021-bibliotek') !== -1 || r.collection.indexOf('150021-fjern') !== -1) {
          var where = ' hjemme';
          if (r.access === 'onsite') {
            where = ' på biblioteket';
          }
          var action = '';
          switch (m.type) {
            case 'Ebog':
              action = 'Læs ';
              break;
            case 'Lydbog (net)':
              action = 'Hør ';
              break;
            default:
              action = 'Se ';
              break;
          }
          var online_link = action + m.type + where;
          return (
            <a className='online-link' href={r.link} key={index + '.' + i} target='_blank' >{online_link}</a>
          );
        }
      }
    });

    return link;
  },

  createButtons(manifestations, userInfo, relations, profile) {
    const orderButtons = manifestations.map((m, index) => {
      if (m.accessType === 'physical') {
        return this.getOrderLink(m, userInfo, manifestations, profile.userIsLoggedIn, index);
      }
      if (m.accessType === 'online' && relations) {
        return this.getOnlineLink(relations, index, m);
      }
    });

    return orderButtons;
  },

  render() {
    const required = ['manifestations', 'profile'];
    for (let i in required) {
      if (!this.props.hasOwnProperty(required[i])) {
        return <div className='work-container--order-buttons clearfix' ></div>;
      }
    }
    const manifestations = this.props.manifestations;
    const profile = this.props.profile;
    const relations = this.props.relations;

    const userInfo = this.getUserInfo(profile);

    const orderButtons = this.createButtons(manifestations, userInfo, relations, profile);

    return (
      <div className='work-container--order-buttons clearfix' >
        {orderButtons}
      </div>
    );
  }
});

export default OrderButton;
