import React, { Component } from 'react'

class Arrow extends Component {
  state = {
    isHovering: false
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    }
  }

  render() {
    const tooltipStyle = {
      display: this.state.isHovering ? 'block' : 'none'
    }

    return (
      <div>
        <div
          className={`slide-arrow ${this.props.direction}`}
          onClick={this.props.clickFunction}
          onMouseEnter={this.handleMouseHover.bind(this)}
          onMouseLeave={this.handleMouseHover.bind(this)}
          data-testid={`arrow-${this.props.direction}`}
        >
          {this.props.glyph}
        </div>

        <div>
          <div
            style={tooltipStyle}
            className={`slide-tooltip ${this.props.direction}`}
            data-testid={`slide-tooltip-${this.props.direction}`}
          >
            {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}

export default Arrow
