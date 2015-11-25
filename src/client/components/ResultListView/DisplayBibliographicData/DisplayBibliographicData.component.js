'use strict';
import React from 'react';

/**
 * Component for creating presentation of bibliographic data
 */

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

const BibliographicData = React.createClass({
  displayName: 'BibliographicData.component',

  propTypes: {
    coverImage: React.PropTypes.object,
    creator: React.PropTypes.string,
    identifiers: React.PropTypes.array.isRequired,
    title: React.PropTypes.string,
    workType: React.PropTypes.string
  },

  getCoverComponent(pids, workType) {
    let CoverImage = null;

    if (!workType) {
      workType = 'other';
    }

    if (this.props.coverImage) {
      const CoverComponent = this.props.coverImage.component;
      let noCoverUrl = this.props.coverImage.noCoverUrl.url;

      if (this.props.coverImage.noCoverUrl && this.props.coverImage.noCoverUrl.appendWorkType) {
        noCoverUrl = this.rewriteCoverImageUrl(this.props.coverImage.noCoverUrl.url, workType);
      }

      CoverImage = (
        <CoverComponent noCoverUrl={noCoverUrl} pids={pids} prefSize={this.props.coverImage.prefSize} rewriteImgUrl={this.props.coverImage.rewriteImgUrl} />
      );
    }

    return CoverImage;
  },

  rewriteCoverImageUrl(url, workType) {
    return url.replace('[WORKTYPE]', workType);
  },

  render() {
    const {title, creator, workType, identifiers} = this.props;
    const icon = _getIcon(workType);
    const pids = identifiers;
    const firstPid = pids[0];
    const workid = 'id-' + firstPid;
    const worklink = '/work?id=' + firstPid;
    const CoverComponent = this.getCoverComponent(pids, workType);

    return (
      <li data-work-id={firstPid} >
        <div className='work' data-work-id={firstPid} id={workid} >
          <a className="image-see-work" href={worklink} >
            <i className={icon.join(' ')} />
            {CoverComponent}
            <div className="title" >{title}</div>
            <div className="creator" >{creator}</div>
          </a>
        </div>
      </li>);
  }
});

export default BibliographicData;
