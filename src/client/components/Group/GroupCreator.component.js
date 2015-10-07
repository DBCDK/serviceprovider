'use strict';

import React, {PropTypes} from 'react';

class GroupCreator extends React.Component {
  static displayName() {
    return 'GroupCreator.component';
  }

  static propTypes() {
    return {
      onCreate: PropTypes.func.isRequired()
    };
  }

  constructor() {
    super();
  }

  createGroup() {
    return () => {
      let name = React.findDOMNode(this.refs.groupName).value.trim();
      let description = React.findDOMNode(this.refs.groupDescription).value.trim();
      const group = {
        name: name,
        description: description
      };
      console.log(this);
      this.props.onCreate(group);
    };
  }

  render() {
    console.log(this);
    return (
      <div className='row'>
        <h4>Opret ny gruppe</h4>
        <div className='small-12 medium-4 column'>
          <label>Gruppenavn</label>
          <input ref="groupName" type='text'></input>
          <label>Beskrivelse</label>
          <textarea ref="groupDescription" placeholder='Skriv lidt om gruppen'></textarea>
          <button onClick={this.createGroup()}>opret</button>
        </div>
        <div className='hide-for-small-only medium-8'>
          <p></p>
        </div>
      </div>
    );
  }
}

export default GroupCreator;
