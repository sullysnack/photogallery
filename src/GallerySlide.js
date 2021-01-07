import React, { Component } from "react";
import './GallerySlide.css';

class GallerySlide extends Component {

  number = 0;
  image = {};

  constructor(props) {
    super(props);
    this.number = props.number || 0;
    this.image = props.image || {};
  }

  componentDidMount() {
  }

  render() {

    let captiontruncated = (this.image.caption || '');
    let max = 200;
    let sfx = '...';
    if (max < captiontruncated.length) captiontruncated = captiontruncated.substring(0, max - sfx.length) + sfx;

    let alt = captiontruncated;
    if ('' === alt) alt = 'Photo ' + this.number;

    return (
      <div className="GallerySlide">
        <img className="GallerySlideImage" src={this.image.url || ''} alt={alt} />
        <div className="GallerySlideCaption">
          {captiontruncated}
        </div>
      </div>
    );
  }
}

export default GallerySlide;
