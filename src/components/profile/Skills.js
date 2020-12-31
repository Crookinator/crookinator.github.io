import React from 'react'
import Table from 'react-bootstrap/Table'

const Skills = () => (
  <div className='row'>
    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
      <Table margin-left-auto margin-right-auto striped bordered hover>
        <thead>
          <tr><th>Programing Technologies</th><th>Accessibility Technologies</th></tr>
        </thead>
        <tbody>
          <tr><td>JavaScript</td><td>Apples Voiceover</td></tr>
          <tr><td>HTML</td><td>JAWS for Windows</td></tr>
          <tr><td>CSS</td><td>NVDA</td></tr>
          <tr><td>React</td><td>Google Talkback</td></tr>
          <tr><td>Express</td><td>Zoomtext</td></tr>
          <tr><td>Django</td><td>Magic</td></tr>
          <tr><td>Python</td></tr>
        </tbody>
      </Table>
    </div>
  </div>
)

export default Skills
