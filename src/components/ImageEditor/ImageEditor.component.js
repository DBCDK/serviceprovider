'use strict';
/**
 * @file
 * ImageEditor is used to upload and crop an image.
 *
 */

import React from 'react';

const ImageEditor = React.createClass({

  getInitialState: function () {
    return {
      dragEndX: null,
      dragEndY: null,
      positionX: 0,
      positionY: 0,
      fixedX: 0,
      fixedY: 0,
      image: null,
      isCroppable: false,
      cvsImageWidth: null,
      cvsImageHeight: null,
      cropDragEnabled: false
    };
  },


  propTypes: function () {
    return {
      initialImageUrl: React.PropTypes.string(),
      onSave: React.PropTypes.func()
    };
  },

  componentDidMount: function () {
    window.addEventListener('resize', this._handleResize);
    this.loadImage(this.props.initialImageUrl, this.drawImage);
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this._handleResize);
  },

  componentDidUpdate: function () {
    this.drawImage();
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
    // create new image from crop selection
    let canvas = React.findDOMNode(this.refs.cvs);
    let croppedImageUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

    this.loadImage(croppedImageUrl, this._handleResize);

    // call save function passed as prop with image url
    this.props.onSave(croppedImageUrl);
  },

  _handleResize: function () {
    this.drawImage();
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


  render: function () {
    let isCroppable = this.state.isCroppable;
    return (
      <div>
        <canvas
          ref='cvs'
          onMouseDown={this.handleDragStart}
          onMouseUp={this.handleDragEnd}
          onMouseMove={this.handleDrag}/>
        <input type='file' onChange={this.handleFileChanged}/>
        <input type='button' ref='cropButton' value='Beskær' onClick={this.handleSave} disabled={!isCroppable}/>
      </div>
    );
  }
});

export default ImageEditor;
