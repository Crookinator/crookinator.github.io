import React, { Fragment } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Home from '../profile/Home'
import AboutMe from '../profile/AboutMe'
import Skills from '../profile/Skills'
import Projects from '../profile/Projects'

const Header = () => (
  <Fragment>
    <h1 className='title'>Andrew Crook</h1>
    <Tabs className='justify-content-center' variant="pills" defaultActiveKey="home">
      <Tab eventKey="home" title="Home"><Home/></Tab>
      <Tab eventKey="about" title="About Me"><AboutMe/></Tab>
      <Tab eventKey="skills" title="Skills"><Skills/></Tab>
      <Tab eventKey="projects" title="Projects"><Projects/></Tab>
    </Tabs>
  </Fragment>
)

export default Header
