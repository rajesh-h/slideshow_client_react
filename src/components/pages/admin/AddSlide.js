import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddSlide extends Component {
  state = {
    title: '',
    imageurl: '',
    description: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addSlide(this.state.title, this.state.imageurl, this.state.description)
    this.setState({ title: '', imageurl: '', description: '' })
  }

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="imageurl"
          style={{ flex: '10', padding: '5px' }}
          placeholder="ImageUrl"
          value={this.state.imageurl}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="description"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Description"
          value={this.state.description}
          onChange={this.onChange}
        />
        <input type="submit" value="Add Slide" className="btn" style={{ flex: '1' }} />
        <hr />
      </form>
    )
  }
}
//PropTypes
AddSlide.propTypes = {
  addSlide: PropTypes.func.isRequired
}

export default AddSlide
