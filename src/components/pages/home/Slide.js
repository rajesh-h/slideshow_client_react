import React from 'react'

const Slide = (props) => {
  const base_url = props.base_url

  return (
    <div className="image-slide">
      <div className="slide-img-container">
        <img
          className="slide-img"
          src={base_url + props.slide.imageurl}
          onMouseDown={props.stopShow}
          onMouseUp={props.restartShow}
          alt=""
          style={props.style}
        />
      </div>
      <div className="imageLeftSide" onClick={props.goToPrevSlide}></div>
      <div className="imageRightSide" onClick={props.goToNextSlide}></div>
      <div>
        <p className="legend" data-testid="slide-title-desc">
          {props.slide.title} {':'} {props.slide.description}
        </p>
      </div>
    </div>
  )
}

export default Slide
