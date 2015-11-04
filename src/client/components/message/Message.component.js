'use strict';

import React from 'react';
import MessageStore from '../../stores/Message.store.js';

class MessageComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      message: MessageStore.getInitialState()
    };

    this.unsubscribe = MessageStore.listen(
      () => {
        this.setState({
          message: MessageStore.store
        });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <span>
        {[this.state.message].map((messageObject, index) => {
          // Uden dette smider react en invariant violation
          // trods det er et enkelt object vi forsøger at lave...
          return (<p className={messageObject.messageType} key={index}>{messageObject.message}</p>);
        })}
      </span>
    );
  }
}

MessageComponent.displayName = 'UserMessage.component';

export default MessageComponent;
