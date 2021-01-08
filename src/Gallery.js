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

  onPrevClick = (e) => {
    if (this.images.length < 2) return;
    let newNdx = (0 < this.state.currentNdx) ? this.state.currentNdx - 1 : this.images.length - 1;
    this.setState({
      currentNdx: newNdx
    });
  };

  onNextClick = (e) => {
    if (this.images.length < 2) return;
    let newNdx = ((1 + this.state.currentNdx) < this.images.length) ? 1 + this.state.currentNdx : 0;
    this.setState({
      currentNdx: newNdx
    });
  };

  render() {
    let prevclassname = 'GalleryNav GalleryNavPrev';
    let nextclassname = 'GalleryNav GalleryNavNext';
    if (this.images.length < 2 ) {
      prevclassname += ' GalleryNavDisabled';
      nextclassname += ' GalleryNavDisabled';
    }

    return (
      <div className="Gallery">
        <div className="GalleryView">
          {this.images.map((image, index) => {
            return (
              <GallerySlide key={index} image={image} currentNdx={this.state.currentNdx} />
            );
           })}
        </div>
        <div className={prevclassname} ref={this.prevBtnRef} onClick={this.onPrevClick}>&#8249;</div>
        <div className={nextclassname} ref={this.nextBtnRef} onClick={this.onNextClick}>&#8250;</div>
      </div>
    );
  }
}

export default Gallery;
