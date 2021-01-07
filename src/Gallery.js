import React, { Component } from "react";
import './Gallery.css';
import GallerySlide from './GallerySlide';

class Gallery extends Component {
  
  images = [];
  prevBtnRef = null;
  nextBtnRef = null;

  constructor(props) {
    super(props);
    this.images = props.images || [];
    this.prevBtnRef = React.createRef();
    this.nextBtnRef = React.createRef();
    this.state = {
      currentNdx: 0
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Gallery">
        <div className="GalleryView">
          {this.images.map((image, index) => {
            return (
              <GallerySlide key={index} number={1 + index} image={image} />
            );
          })}
        </div>
        <div className="GalleryPrev" ref={this.prevBtnRef}>&#8249;</div>
        <div className="GalleryNext" ref={this.nextBtnRef}>&#8250;</div>
      </div>
    );
  }
}

export default Gallery;
