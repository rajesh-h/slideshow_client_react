import React, { Component } from 'react'
// import axios from 'axios';
import Slide from './Slide'
import Arrow from './Arrow'
import './SlideShow.css'

export default class Carousel extends Component {
  base_url = this.props.base_url

  state = {
    // activeSlides : [],
    // imagesLoaded : false,
    currentImageIndex: 0
  }

  componentDidMount() {
    this.startSlideShow()
  }

  previousSlide() {
    const lastIndex = this.props.activeSlides.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index
    })
  }

  nextSlide() {
    const lastIndex = this.props.activeSlides.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index
    })
  }

  startSlideShow = () => {
    this.slideShowInterval = setInterval(() => {
      this.nextSlide()
      // console.log('SlideShow Started')
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.slideShowInterval)
  }

  stopShow() {
    clearInterval(this.slideShowInterval)
    // console.log('SlideShow Stopped')
  }

  render() {
    return this.props.imagesLoaded ? (
      <div className="slide-show">
        <br />
        <Arrow
          direction="left"
          clickFunction={this.previousSlide.bind(this)}
          glyph="&#9664;"
          title={
            this.state.currentImageIndex !== 0
              ? this.props.activeSlides[this.state.currentImageIndex - 1].title
              : this.props.activeSlides[this.props.activeSlides.length - 1].title
          }
        />
        <Slide
          slide={this.props.activeSlides[this.state.currentImageIndex]}
          stopShow={this.stopShow.bind(this)}
          restartShow={this.startSlideShow.bind(this)}
          goToPrevSlide={this.previousSlide.bind(this)}
          goToNextSlide={this.nextSlide.bind(this)}
          base_url={this.base_url}
          style={{ transition: 'left 2s ease-in-out' }}
        />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide.bind(this)}
          glyph="&#9654;"
          title={
            this.state.currentImageIndex !== this.props.activeSlides.length - 1
              ? this.props.activeSlides[this.state.currentImageIndex + 1].title
              : this.props.activeSlides[0].title
          }
        />
      </div>
    ) : (
      <div>
        <h1>Slideshow Loading in progress</h1>
      </div>
    )
  }
}
