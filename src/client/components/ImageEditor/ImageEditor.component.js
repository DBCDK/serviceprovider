'use strict';
/**
 * @file
 * ImageEditor is used to upload and crop an image.
 *
 */

import React from 'react';

const ImageEditor = React.createClass({

  displayName: function () {
    return 'ReactImageEditor';
  },

  propTypes: function () {
    return {
      initialImageUrl: React.PropTypes.string(),
      onSave: React.PropTypes.func()
    };
  },

  getInitialState: function () {
    return {
      cvsImageWidth: null,
      cvsImageHeight: null,
      cropDragEnabled: false,
      dragEndX: null,
      dragEndY: null,
      fixedX: 0,
      fixedY: 0,
      image: null,
      isCroppable: false,
      positionX: 0,
      positionY: 0
    };
  },

  componentDidMount: function () {
    window.addEventListener('resize', this._handleResize);
    this.loadImage(this.props.initialImageUrl, this.drawImage);
  },

  componentDidUpdate: function () {
    this.drawImage();
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this._handleResize);
  },

  drawImage: function () {
    let self = this;

    if (typeof this.state.image !== 'undefined') {
      // get drawing context
      let canvas = React.findDOMNode(this.refs.cvs);
      let ctx = canvas.getContext('2d');

      let image = this.state.image;
      // resize canvas dynamically
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerWidth;

      let isLandscape = image.width > image.height;
      let newCvsImageWidth = isLandscape ? image.width * (ctx.canvas.width / image.height) : ctx.canvas.width;
      let newCvsImageHeight = isLandscape ? ctx.canvas.width : image.height * (ctx.canvas.width / image.width);
      let offsetX = self.state.positionX;
      let offsetY = self.state.positionY;

      ctx.drawImage(image, -offsetX, -offsetY, newCvsImageWidth, newCvsImageHeight);
    }
  },

  loadImage: function (url, callback) {
    let self = this;
    let image = new Image();
    image.onload = function () {

      // set new image and reset all other state
      let isCroppable = image.width !== image.height;
      self.setState({
        dragEndX: null,
        dragEndY: null,
        positionX: 0,
        positionY: 0,
        fixedX: 0,
        fixedY: 0,
        image: image,
        isCroppable: isCroppable,
        cvsImageWidth: image.width,
        cvsImageHeight: image.height,
        cropDragEnabled: false
      });

      if (typeof callback !== 'undefined') {
        callback();
      }
    };
    image.src = url;
  },


  handleFileChanged: function (e) {

    let files;
    files = e.target.files;

    if (files[0]) { // if file has been selected
      let reader = new FileReader();
      reader.onload = () => {
        let imageUrl = reader.result;
        this.loadImage(imageUrl);
        this.props.onSave(imageUrl);
      };
      reader.readAsDataURL(files[0]);
    }
  },


  handleSave: function () {
    const self = this;
    // create new image from crop selection
    let canvas = React.findDOMNode(this.refs.cvs);

    let croppedImageUrl = canvas.toDataURL('image/png');

    // reduce large images to 200 x 200 image
    const imageSize = 200;
    const newImage = document.createElement('img');
    newImage.src = croppedImageUrl;

    newImage.onload = function () {

      // draw new image on canvas
      let newCanvas = document.createElement('canvas');
      newCanvas.width = imageSize;
      newCanvas.height = imageSize;
      let newCtx = newCanvas.getContext('2d');
      newCtx.drawImage(newImage, 0, 0, imageSize, imageSize);

      // get dataUrl from canvas
      let newDataUrl = newCanvas.toDataURL('image/png');
      croppedImageUrl = newDataUrl;

      self.loadImage(croppedImageUrl, self._handleResize);

      // call save function passed as prop with image url
      self.props.onSave(croppedImageUrl);

    };
  },


  _handleResize: function () {
    this.drawImage();
  },


  updateImagePosition: function (mouseX, mouseY) {

    // where is mouse relative to start drag
    let dX = this.state.dragStartX - mouseX;
    let dY = this.state.dragStartY - mouseY;

    // This state must be changed
    let positionX = this.state.fixedX + dX;
    let positionY = this.state.fixedY + dY;

    let isSquare = this.state.cvsImageWidth === this.state.cvsImageHeight;
    let isLandscape = this.state.cvsImageWidth > this.state.cvsImageHeight;

    if (isSquare) {
      // no panning - image is already as square as it can be.
      positionX = this.state.fixedX;
      positionY = this.state.fixedY;
    }
    else if (isLandscape) {

      // compute canvas image dimensions
      let canvas = React.findDOMNode(this.refs.cvs);
      let ctx = canvas.getContext('2d');
      let ratio = this.state.image.height / this.state.image.width;
      let cvsImageWidth = (1 / ratio) * ctx.canvas.width;
      let maxPositionX = cvsImageWidth - ctx.canvas.width;

      // limit panning by image height
      positionX = (positionX > maxPositionX) ? maxPositionX : positionX;
      positionX = (positionX < 0) ? 0 : positionX;

      // restrict vertical panning
      positionY = this.state.fixedY;

    }
    else {

      // compute canvas image dimensions
      let canvas = React.findDOMNode(this.refs.cvs);
      let ctx = canvas.getContext('2d');
      let ratio = this.state.image.height / this.state.image.width;
      let cvsImageHeight = ratio * ctx.canvas.height;
      let maxPositionY = cvsImageHeight - ctx.canvas.height;

      // limit panning by image height
      positionY = (positionY > maxPositionY) ? maxPositionY : positionY;
      positionY = (positionY < 0) ? 0 : positionY;

      // restrict vertical panning
      positionX = this.state.fixedX;
    }

    this.setState({
      positionX: positionX,
      positionY: positionY
    });
  },

  handleDragStart: function (e) {
    // mouse position inside crop frame
    let mouseX = e.clientX - e.target.getBoundingClientRect().left;
    let mouseY = e.clientY - e.target.getBoundingClientRect().top;

    // position in crop frame when drag initiated
    let dragStartX = mouseX;
    let dragStartY = mouseY;

    this.setState({
      cropDragEnabled: true,
      dragStartX: dragStartX,
      dragStartY: dragStartY
    });
  },

  handleDrag: function (e) {
    if (this.state.cropDragEnabled) {
      // mouse position inside crop frame
      let mouseX = e.clientX - e.target.getBoundingClientRect().left;
      let mouseY = e.clientY - e.target.getBoundingClientRect().top;

      this.updateImagePosition(mouseX, mouseY);
    }
  },

  handleDragEnd: function () {
    // This state must be changed
    let fixedX = this.state.positionX;
    let fixedY = this.state.positionY;

    this.setState({
      cropDragEnabled: false,
      fixedX: fixedX,
      fixedY: fixedY
    });
  },

  handleTouchStart: function (e) {
    // mouse position inside crop frame
    let mouseX = e.changedTouches[0].clientX - e.changedTouches[0].target.getBoundingClientRect().left;
    let mouseY = e.changedTouches[0].clientY - e.changedTouches[0].target.getBoundingClientRect().top;
    // position in crop frame when drag initiated
    let dragStartX = mouseX;
    let dragStartY = mouseY;

    this.setState({
      cropDragEnabled: true,
      dragStartX: dragStartX,
      dragStartY: dragStartY
    });
  },

  handleTouchMove: function (e) {

    // do not scroll window
    e.preventDefault();

    if (this.state.cropDragEnabled) {
      // mouse position inside crop frame
      let mouseX = e.changedTouches[0].clientX - e.changedTouches[0].target.getBoundingClientRect().left;
      let mouseY = e.changedTouches[0].clientY - e.changedTouches[0].target.getBoundingClientRect().top;

      this.updateImagePosition(mouseX, mouseY);
    }
  },

  render: function () {
    let isCroppable = this.state.isCroppable;
    return (
      <div>
        <canvas
          onMouseDown={this.handleDragStart}
          onMouseMove={this.handleDrag}
          onMouseUp={this.handleDragEnd}
          onTouchEndCapture={this.handleDragEnd}
          onTouchMove={this.handleTouchMove}
          onTouchStartCapture={this.handleTouchStart}
          ref='cvs'/>
        <input onChange={this.handleFileChanged} type='file'/>
        <input disabled={!isCroppable} onClick={this.handleSave} ref='cropButton' type='button' value='Beskær'/>
      </div>
    );
  }
});

export default ImageEditor;
