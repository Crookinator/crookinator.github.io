import React, { Fragment } from 'react'
// import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import Contact from '../Footer'

const App = () => {
  return (
    <Fragment>
      <div className='container'><Header/></div>
      <Contact/>
    </Fragment>
  )
}

export default App
