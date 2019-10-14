import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h3>BNRY Technical Test</h3>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/admin">
        Admin
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/slider2">
        Slider2
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '3px'
}
const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}
export default Header
