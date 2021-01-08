import React from 'react'
import pic from './headshot.png'

const Home = () => (
  <div className='row'>
    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
      <img src={pic} className='pic' alt='A headshot of Andrew with a wooden fence and trees in the background' />
      <h2>Welcome!</h2>
      <br/>
      <p className='welcomeText'>
      Thanks so much for visiting my site. Please explore the navigation tabs above.
      If you have any questions use the contact information found in the footer. I look forward to helping you make the world more accessible through coding.
      </p>
    </div>
  </div>
)

export default Home
