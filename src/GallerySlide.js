import React, { Component } from "react";
import './GallerySlide.css';

class GallerySlide extends Component {

  captionmaxlength = 200;
  truncatedcaptionsuffix = '...';

  render() {
    let slidestyle = {
      'left': (-100 * (this.props.currentNdx || 0)) + '%'
    };

    let captiontruncated = ((this.props.image || {}).caption || '');
    if (this.captionmaxlength < captiontruncated.length)
      captiontruncated = captiontruncated.substring(0, this.captionmaxlength - this.truncatedcaptionsuffix.length) + this.truncatedcaptionsuffix;

    return (
      <div className="GallerySlide" style={slidestyle}>
        <img className="GallerySlideImage" src={(this.props.image || {}).url || ''} alt="" />
        <div className="GallerySlideCaption">
          {captiontruncated}
        </div>
      </div>
    );
  }
}

export default GallerySlide;
