import React from 'react'
import PropTypes from 'prop-types'
import './Slides.css'
import SlideItem from './SlideItem'

class Slides extends React.Component {
  base_url = this.props.base_url

  renderTableData() {
    return this.props.slides.map((slide, index) => {
      const { id, title, imageurl, description } = slide //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{imageurl}</td>
          <td>{description}</td>
          <td>
            <button
              onClick={this.props.editSlide.bind(this, id)}
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              Edit
            </button>
            {`  `}
            <button
              onClick={this.props.delSlide.bind(this, id)}
              style={{ cursor: 'pointer', color: 'red' }}
            >
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let header = ['id', 'title', 'imageurl', 'description', 'Actions']
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <table id="slides">
          <tbody>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>SLIDER IMAGE</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>

            {this.props.slides.map((slide) => (
              <SlideItem
                key={slide.id}
                slide={slide}
                editSlide={this.props.editSlide}
                delSlide={this.props.delSlide}
                base_url={this.base_url}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

//PropTypes
Slides.propTypes = {
  slides: PropTypes.array.isRequired,
  delSlide: PropTypes.func.isRequired
}

//Styles

export default Slides
