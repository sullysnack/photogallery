import React, { Component } from "react";
import './GallerySlide.css';

class GallerySlide extends Component {

  captionmaxlength = 200;
  truncatedcaptionsuffix = '...';

  render() {
    let slidestyle = {
      'left': (-100 * (this.props.currentNdx || 0)) + '%'
    };

    let imgurl = (this.props.image || {}).url || '';
    let imgtag = '';
    if (0 < imgurl.length) imgtag =
      <img className="GallerySlideImage" src={imgurl} alt="" />;

    let captiontruncated = (this.props.image || {}).caption || '';
    if (this.captionmaxlength < captiontruncated.length)
      captiontruncated = captiontruncated.substring(0, this.captionmaxlength - this.truncatedcaptionsuffix.length) + this.truncatedcaptionsuffix;

    let captiondiv = '';
    if (0 < captiontruncated.length) captiondiv = 
      <div className="GallerySlideCaption">
        {captiontruncated}
      </div>;

    return (
      <div className="GallerySlide" style={slidestyle}>
        {imgtag}
        {captiondiv}
      </div>
    );
  }
}

export default GallerySlide;
