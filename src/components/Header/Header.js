import React, { Fragment } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Home from '../profile/Home'
import Projects from '../profile/Projects'
import Skills from '../profile/Skills'
import AboutMe from '../profile/AboutMe'

const Header = () => (
  <Fragment>
    <h1>Portfolio for Andrew Crook</h1>
    <Tabs className='justify-content-center' variant="pills" defaultActiveKey="home">
      <Tab eventKey="home" title="Home"><Home/></Tab>
      <Tab eventKey="about" title="About Me"><AboutMe/></Tab>
      <Tab eventKey="skills" title="Skills"><Skills/></Tab>
      <Tab eventKey="projects" title="Projects"><Projects/></Tab>
      <Tab eventKey="contact" title="Contact Me"></Tab>
    </Tabs>
  </Fragment>
)

export default Header
