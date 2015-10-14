'use strict';

import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';

class GroupCreator extends React.Component {
  static displayName() {
    return 'GroupCreator.component';
  }

  static propTypes() {
    return {
    };
  }

  constructor() {
    super();
  }

  createGroup() {
    return () => {
      let name = ReactDom.findDOMNode(this.refs.groupName).value.trim();
      let description = ReactDom.findDOMNode(this.refs.groupDescription).value.trim();
      const group = {
        name: name,
        description: description
      };
      if (this.props.editGroupMode) {
        // save group and switch out of edit mode
        this.props.onSave(group);
        this.props.toggleEditGroupCb();
      }
      else {
        this.props.onCreate(group);
      }
    };
  }

  render() {

    const title = (this.props.editGroupMode) ? 'Rediger gruppe' : 'Opret ny gruppe';
    const backButton = (this.props.editGroupMode) ? <button onClick={this.props.toggleEditGroupCb}>Tilbage</button> : null;

    const groupName = this.props.name;
    const description = this.props.description;

    return (
      <div className='row'>
        <h4>{title}</h4>
        <div className='small-12 medium-4 column'>
          <label>Gruppenavn</label>
          <input defaultValue={groupName} ref="groupName" type='text'></input>
          <label>Beskrivelse</label>
          <textarea
            defaultValue={description}
            placeholder='Skriv lidt om gruppen'
            ref="groupDescription"
            ></textarea>
          {backButton}
          <button onClick={this.createGroup()}>Gem</button>
        </div>
        <div className='hide-for-small-only medium-8'>
          <p></p>
        </div>
      </div>
    );
  }
}

GroupCreator.displayName = 'GroupCreator.component';
GroupCreator.propTypes = {
  description: PropTypes.string.isRequired,
  editGroupMode: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  toggleEditGroupCb: PropTypes.func.isRequired
};

export default GroupCreator;
