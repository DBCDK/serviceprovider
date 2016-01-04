'use strict';

import React, {PropTypes} from 'react';

import HoldingStatus from '../HoldingStatus/HoldingStatus.component';

class WorkEditionComponent extends React.Component {
  render() {
    return (
      <div className={'work-container--work--editions--publication-details ' + this.props.workType}>
        <HoldingStatus accessType={this.props.accessType} identifier={this.props.identifier} />
        <div className='type' >{this.props.workType}</div>
        <div className='date' >{this.props.edition + (this.props.edition !== '' ? ', ' : '')} {this.props.date}</div>
        <div className='extents' >{this.props.extent}</div>
        <div className='isbns' >
          <span>{this.props.isbns.length > 0 ? 'ISBN: ' : ''}</span>
          {this.props.isbns.join(', ')}
        </div>
      </div>
    );
  }
}

WorkEditionComponent.displayName = 'WorkEdition.component';
WorkEditionComponent.propTypes = {
  accessType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  edition: PropTypes.string.isRequired,
  extent: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  isbns: PropTypes.array.isRequired,
  workType: PropTypes.string.isRequired
};

export default WorkEditionComponent;
