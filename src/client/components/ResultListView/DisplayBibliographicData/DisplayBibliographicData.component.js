'use strict';

/**
 * @file
 * Component for creating presentation of bibliographic data
 */

import React from 'react';

// Components
import CoverImageComponent from '../../CoverImage/CoverImageContainer.component';

function _getIcon(worktype) {

  let icon = new Array('fa');

  switch (worktype) {
    case 'article':
      icon.push('fa-file-text');
      break;
    case 'book':
      icon.push('fa-book');
      break;
    case 'audiobook':
      icon.push('fa-book');
      break;
    case 'game':
      icon.push('fa-gamepad');
      break;
    case 'movie':
      icon.push('fa-film');
      break;
    case 'music':
      icon.push('fa-music');
      break;
    case 'periodica':
      icon.push('fa-newspaper-o');
      break;
    default:
      icon.push('fa-question');
      break;
  }

  return icon;

}

export default class BibliographicData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, creator, workType, identifiers} = this.props;
    const icon = _getIcon(workType);
    const pids = identifiers;
    const firstPid = pids[0];
    const workid = 'id-' + firstPid;
    const worklink = '/work?id=' + firstPid;
    const noCoverUrl = workType ? `/covers/no-cover-image-${workType}.png` : `/covers/no-cover-image-other.png`;

    return (
      <li data-work-id={firstPid} >
        <div className='work' data-work-id={firstPid} id={workid} >
          <a className="image-see-work" href={worklink} >
            <i className={icon.join(' ')} />
            <CoverImageComponent noCoverUrl={noCoverUrl} pids={pids} prefSize={'detail_500'} />
            <div className='work--result-details'>
              <div className="title" >{title}</div>
              <div className="creator" >{creator}</div>
            </div>
          </a>
        </div>
      </li>);
  }
}

BibliographicData.displayName = 'BibliographicData';
BibliographicData.propTypes = {
  creator: React.PropTypes.string,
  identifiers: React.PropTypes.array.isRequired,
  title: React.PropTypes.string,
  workType: React.PropTypes.string
};
