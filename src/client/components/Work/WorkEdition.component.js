'use strict';

import React, {PropTypes} from 'react';

import HoldingStatus from '../HoldingStatus/HoldingStatus.component';

class WorkEditionComponent extends React.Component {
  render() {
    const date = this.props.date !== '' ? '(' + this.props.date + ')' : '';
    const publisher = this.props.publisher !== '' ? this.props.publisher + ' ' : '';
    return (
      <div className={'work-container--work--editions--publication-details ' + this.props.workType}>
        <HoldingStatus accessType={this.props.accessType} identifier={this.props.identifier} />
        <div className='type' >{this.props.workType}</div>
        <div className='date' >{this.props.edition + (this.props.edition !== '' ? ', ' : '')} {publisher}{date}</div>
        <div className='extents' >{this.props.extent}</div>
        <div className='isbns' >
          <span>{this.props.isbns.length > 0 ? 'ISBN: ' : ''}</span>
          {this.props.isbns.join(', ')}
        </div>
        <div className='issns' >
          <span>{this.props.issns && this.props.issns.length > 0 ? 'ISSN: ' : ''}</span>
          {this.props.issns ? this.props.issns.join(', ') : ''}
        </div>
        <div className='partOf' >
          <span>{this.props.partOf && this.props.partOf.length > 0 ? 'I: ' : ''}</span>
          {this.props.partOf ? this.props.partOf.join(', ISSN: ') : ''}
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
  issns: PropTypes.array.isRequired,
  partOf: PropTypes.array.isRequired,
  publisher: PropTypes.string.isRequired,
  workType: PropTypes.string.isRequired
};

export default WorkEditionComponent;
