'use strict';

/**
 * @file
 * Renders a cover image based on the given pids.
 */

import React from 'react';
import CoverImage from './CoverImage.component.js';
import CoverImageStore from './CoverImage.store.js';
import CoverImageActions from './CoverImage.action.js';

export default class CoverImageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgurl: this.props.noCoverUrl ? this.props.noCoverUrl : ''
    };

    this.unsubscribe = [
      CoverImageStore.listen(this.setImageUrl.bind(this))
    ];
  }

  componentDidMount() {
    const store = CoverImageStore.getState();
    this.setImageUrl(store);

    if (this.props.pids) {
      CoverImageActions(this.props.pids);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.imgurl !== this.state.imgurl && nextState.imgurl !== '');
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  setImageUrl(store) {
    const images = this.getImages(store);
    const imgurl = this.getImageUrl(images);
    this.setState({imgurl: imgurl});
  }

  getImages(store) {
    return store[this.props.pids] ? store[this.props.pids] : [];
  }

  getImageUrl(images) {
    let imgurl = this.props.noCoverUrl || '';
    images.forEach((image) => {
      if (image.size === this.props.prefSize) {
        imgurl = image.url;
      }
    });

    return imgurl;
  }

  render() {
    return <CoverImage imgurl={this.state.imgurl} />;
  }
}

CoverImageContainer.displayName = 'CoverImageContainer';
CoverImageContainer.propTypes = {
  noCoverUrl: React.PropTypes.string,
  pids: React.PropTypes.array,
  prefSize: React.PropTypes.string.isRequired
};
