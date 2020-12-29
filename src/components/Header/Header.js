import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link to="/">Home</Nav.Link>
  </Fragment>
)

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav collapseOnSelect className="ml-auto">
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
