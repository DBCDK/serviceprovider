'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

class MemberSummary extends React.Component {
  static displayName() {
    return 'MemberSummary.component';
  }

  static propTypes() {
    return {
      members: PropTypes.array.isRequired
    };
  }

  constructor() {
    super();
  }

  render() {
    const memberCount = this.props.members.length;
    return (
      <div className='row group--member-summary'>
        <ul className='group--member-horizontal-list small-10'>
          {this.props.members.map(function(member) {
            return <li key={member.id}><img alt={member.email} className='small-1 group--member-image' src={member.imageUrl || '/dummy.jpg'}></img></li>;
          })}
        </ul>
        <span className='group--member-counter small-2'>{memberCount} medlemmer</span>
      </div>
    );
  }
}

export default MemberSummary;
