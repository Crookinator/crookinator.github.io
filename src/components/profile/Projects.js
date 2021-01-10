import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import batman from '../Batman Tic-Tac-Toe.png'
import gdl from '../Guide Dog Log.png'
import kkLight from '../Kidz-Kitchen-light.png'
import kkDark from '../Kidz-Kitchen-dark.png'
import scrumiDark from '../Scrumi-App-(dark).png'
import scrumiLight from '../Scrumi-App-(light).png'

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
          <h3>Batman Tic-Tac-Toe</h3>
          <p className='carouselText'>For my first project I created a 1990s Batman themed tic-tac-toe game. This game authenticates a user, stores there game data to an api and includes audio tracks when the user successfully logs in and when either X or O wins a game.</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gdl}
            alt="A screenshot of the Guide Dog Log interface. The background is black with white text and a green header. "
          />
          <h3>Guide Dog Log</h3>
          <p className='carouselText'>My second project focuses more on solving a need. As a guide dog handler myself I found a need for a forum where guide dog handlers could share experiences. I built the client side and the api apps as well as included some helpful information to visitors to the site. This full stack app also requires user authentication.</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={scrumiLight}
            alt="A screenshot of the scrumi app. The interface has a purple navigation bar at the top with a white body and black text."
          />
          <h3>Scrumi</h3>
          <p className='carouselText'>This third project was a group project utilizing React. We wanted to create a scrum focused to do list. This to do list has both individual tasks as well as sprints. Tasks and Sprints are their own resources on the api so you can have a task without needing to assign a sprint to it.</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={scrumiDark}
            alt="A screenshot of the scrumi dark mode app. The interface has a purple navigation bar at the top with a black background and white text."
          />
          <h3>Scrumi (dark mode)</h3>
          <p className='carouselText'>With this project I also integrated an @media query for when users have system wide dark mode enabled. When this is true the entire app interface changes to accomidate the users preference.</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kkLight}
            alt="The find recipes view of Kidz Kitchen. The Navigation bar and main items have a very kid friendly orange color, while the background is white."
          />
          <h3>Kidz Kitchen</h3>
          <p className='carouselText'>My most recent project came about because my son is very into cooking right now and asked me to create an app where he could keep track of recipes as well as get recipe ideas. This app is also full stack, and includes a dark mode version. I used Python, Django, and PostgreSQL to create the api. I used React for the client side application. I also connected to a third party api called recipe puppy for the recipe suggestions.</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kkDark}
            alt="The find recipes view of Kidz Kitchen. This is the dark mode version so the background is black and the navigation bar and on screen items have a very dark gray background. All the text is white."
          />
          <h3>Kidz Kitchen (dark mode)</h3>
          <p className='carouselText'>Knowing that my son chose a very jaring orange for the light mode version of the app. I strove to create a very muted UX for the dark mode. This dark mode is achieved the same as the Scrumi dark mode. I used an @media query to check to see if the user had system wide dark mode enabled.</p>
        </Carousel.Item>
      </Carousel>    </div>
  </div>
)

export default Projects
