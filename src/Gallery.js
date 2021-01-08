import React, { Component } from "react";
import './Gallery.css';
import GallerySlide from './GallerySlide';

class Gallery extends Component {

  noImagesCaption = 'No images are configured.';

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
    let images = this.images;
    if (images.length < 1) {
      images.push({'caption': this.noImagesCaption});
    }

    let isSwiping = false;
    let swipeStartX = 0;

    let prevclassname = 'GalleryNav GalleryNavPrev';
    let nextclassname = 'GalleryNav GalleryNavNext';
    if (images.length < 2 ) {
      prevclassname += ' GalleryNavDisabled';
      nextclassname += ' GalleryNavDisabled';
    }

    return (
      <div className="Gallery">
        <div className="GalleryView"
          onDragStart={e => {
            e.preventDefault();
          }}
          onMouseDown={e => {
            isSwiping = false;
            swipeStartX = e.clientX || 0;
          }}
          onMouseMove={() => {
            isSwiping = true;
          }}
          onMouseUp={e => {
            if (isSwiping) {
              const swipeEndX = e.clientX || 0;
              if (6 + swipeEndX < swipeStartX) this.nextBtnRef.current.click();
              else if (6 + swipeStartX < swipeEndX) this.prevBtnRef.current.click();
              isSwiping = false;
            }
          }}
          onTouchStart={e => {
            isSwiping = false;
            swipeStartX = (0 < (e.touches || []).length) ? (e.touches[0].clientX || 0) : 0;
          }}
          onTouchMove={() => {
            isSwiping = true;
          }}
          onTouchEnd={e => {
            if (isSwiping) {
              const swipeEndX = (0 < (e.changedTouches || []).length) ? (e.changedTouches[0].clientX || 0) : 0;
              if (6 + swipeEndX < swipeStartX) this.nextBtnRef.current.click();
              else if (6 + swipeStartX < swipeEndX) this.prevBtnRef.current.click();
              isSwiping = false;
            }
          }}
        >
          {images.map((image, index) => {
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
