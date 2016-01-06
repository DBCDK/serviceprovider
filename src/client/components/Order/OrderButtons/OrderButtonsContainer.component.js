'use strict';

import React from 'react';

import OrderPolicyActions from '../../../actions/OrderPolicy.actions';

import OrderPolicyStore from '../../../stores/OrderPolicy.store';

import OrderButtonOnlineComponent from './OrderButton.online.component.js';
import OrderButtonPhysicalComponent from './OrderButton.physical.component.js';

export default class OrderButtonsContainerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      orderPolicies: OrderPolicyStore.store
    };

    this.unsubscribe = [
      OrderPolicyStore.listen(() => this.setState({orderPolicies: OrderPolicyStore.store}))
    ];
  }

  componentDidMount() {
    this.props.manifestations.filter((m) => {
      return m.accessType === 'physical';
    }).forEach((m) => {
      OrderPolicyActions.fetchOrderPolicy({
        agencyId: this.props.agency,
        pids: m.identifiers
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe.forEach((unsub) => unsub());
  }

  render() {
    const physicalButtons = (this.props.manifestations || []).filter((manifestation) => {
      return manifestation.accessType === 'physical';
    }).map((manifestation) => {
      let orderPolicy;

      manifestation.identifiers.forEach((pid) => {
        if (this.state.orderPolicies.hasOwnProperty(pid)) {
          orderPolicy = this.state.orderPolicies[pid];
        }
      });

      return (
        <OrderButtonPhysicalComponent
          key={manifestation.identifiers.join(',')}
          manifestation={manifestation}
          orderPolicy={orderPolicy}
          />
      );
    });

    const onlineButtons = (this.props.relations || []).filter((relation) => {
      return relation.type === 'dbcaddi:hasOnlineAccess';
    }).map((relation) => {
      return (
        <OrderButtonOnlineComponent
          key={relation.link}
          relation={relation}
          />
      );
    });

    return (
      <div className='order--order-button-container'>
        {physicalButtons}
        {onlineButtons}
      </div>
    );
  }
}

OrderButtonsContainerComponent.displayName = 'OrderButtonsContainer.component';
OrderButtonsContainerComponent.propTypes = {
  agency: React.PropTypes.string.isRequired,
  defaultLibrary: React.PropTypes.string.isRequired,
  manifestations: React.PropTypes.array.isRequired,
  relations: React.PropTypes.array.isRequired
};
