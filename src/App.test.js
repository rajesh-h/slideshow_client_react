import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import SlideShow from './components/pages/home/SlideShow'
import { render, fireEvent } from '@testing-library/react'

const base_url = 'https://loacalhost:3000'
const slides = [
  {
    title: 'Tiger',
    description: 'Details about Tiger',
    imageurl: 'images/image1.jpg'
  },
  {
    title: 'Parrot',
    description: 'Details about Parrot',
    imageurl: 'images/image2.jpg'
  },
  {
    title: 'ButterFly',
    description: 'Details about ButterFly',
    imageurl: 'images/image3.jpg'
  }
]

// Default test existed
// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

//Test 1
describe('Check SlideShow Component Initial Rendering', () => {
  it('Check SlideShow Component using render method', () => {
    const { getByTestId } = render(
      <SlideShow base_url={base_url} activeSlides={slides} imagesLoaded={true} />
    )
    let expectedTitle = slides[0].title + ' : ' + slides[0].description

    expect(getByTestId('slide-title-desc').innerHTML).toEqual(expectedTitle)
  })
})

//Test 2
describe('Check Next Slide Click', () => {
  it('Clicking next button should bring new slide', () => {
    const { getByTestId } = render(
      <SlideShow base_url={base_url} activeSlides={slides} imagesLoaded={true} />
    )
    let expectedTitle = slides[1].title + ' : ' + slides[1].description

    // click Next Arrow

    fireEvent.click(getByTestId('arrow-right'))

    expect(getByTestId('slide-title-desc').innerHTML).toEqual(expectedTitle)
  })
})

//Test 3
describe('Check Hover on Left Arrow', () => {
  it('Should show previous slide Title', () => {
    const { getByTestId } = render(
      <SlideShow base_url={base_url} activeSlides={slides} imagesLoaded={true} />
    )
    let expectedTitle = slides[0].title

    // We will click Next Arrow and then check for the existence of tooltip
    fireEvent.click(getByTestId('arrow-right'))

    expect(getByTestId('slide-tooltip-left').innerHTML).toEqual(expectedTitle)
  })
})
