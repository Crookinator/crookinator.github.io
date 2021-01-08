import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import batman from '../Batman Tic-Tac-Toe.png'
import gdl from '../Guide Dog Log.png'

const Projects = () => (
  <div className='row'>
    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
      <h2>My Projects</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={batman}
            alt="Screenshot of Batman tic-tac-toe. The game board has the bat cave behind it and the colors are gray, black, and yellow."
          />
          <Carousel.Caption>
            <h3>Batman Tic-Tac-Toe</h3>
            <p>For my first project I created a 1990s Batman themed tic-tac-toe game. This game authenticates a user, stores there game data to an api and includes audio tracks when the user successfully logs in and when either X or O wins a game.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gdl}
            alt="A screenshot of the Guide Dog Log interface. The background is black with white text and a green header. "
          />

          <Carousel.Caption>
            <h3>Guide Dog Log</h3>
            <p>My second project focuses more on solving a need. As a guide dog handler myself I found a need for a forum where guide dog handlers could share experiences. I built the client side and the api apps as well as included some helpful information to visitors to the site. This full stack app also requires user authentication.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="A screenshot of the scrumi app. The interface has a purple navigation bar at the top with a white body and black text."
          />

          <Carousel.Caption>
            <h3>Scrumi</h3>
            <p>This third project was a group project utilizing React. We wanted to create a scrum focused to do list. This to do list has both individual tasks as well as sprints. Tasks and Sprints are their own resources on the api so you can have a task without needing to assign a sprint to it.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="The dark mode version of Kidz Kitchen."
          />
          <Carousel.Caption>
            <h3>Kidz Kitchen</h3>
            <p>My most recent project came about because my son is very into cooking right now and asked me to create an app where he could keep track of reipes as well as get recipe ideas. This app is also full stack, I used Python, Django, and PostgreSQL for the api. I used React with the client side application. I also connected to a third party api called recipe puppy for the recipe suggestions.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>    </div>
  </div>
)

export default Projects
