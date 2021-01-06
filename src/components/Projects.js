import React from 'react'
import devmaps1 from '../styles/devmaps1.png'
import devmaps2 from '../styles/devmaps2.png'
import devmaps3 from '../styles/devmaps3.png'
import howto1 from '../styles/howto1.png'
import howto2 from '../styles/howto2.png'
import howto3 from '../styles/howto3.png'
import howto4 from '../styles/howto4.png'
import pizza1 from '../styles/pizza1.png'
import pizza2 from '../styles/pizza2.png'
import pizza3 from '../styles/pizza3.png'
import pizza4 from '../styles/pizza4.png'
import cher1 from '../styles/cher1.png'
import cher2 from '../styles/cher2.png'
import cher3 from '../styles/cher3.png'
import cher4 from '../styles/cher4.png'
import Fade from 'react-reveal/Fade'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'



const Projects = () => {

  const shoot = () => {
    alert(this)
    /*
    The 'this' keyword refers to the component object
    */
  }

  return <main className="projectsMain">
    <h1>Projects</h1>
    <div className="project">
      <Fade bottom>
        <div className="mobileColumn">
          <div className="projectImg">
            <div className="carousel-wrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <img src={howto1} />
                </div>
                <div>
                  <img src={howto2} />
                </div>
                <div>
                  <img src={howto3} />
                </div>
                <div>
                  <img src={howto4} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="projectBlurb">
            <h2>HowTo Tube</h2>
            <h4>React | Sass | Python | Flask | PostgreSQL</h4>
            <p>This was a group project completed in one week. We aimed to create a marketable platform for professional
            development. Users are invited to create profiles and add videos
            to their page. Based on who they choose to follow and what genres they have selected
            as interesting during sign-up, videos are suggested to them at the bottom of their
            profile. Users are also able to add comments on videos as they please.<br></br><br></br>
            I was responsible for setting up routes and creating the basic models on the backend
            for users and videos as well as creating the front end sign-up, login and home pages.
            I also styled the entire project.
            </p>
            <div className="buttons">
              <button><a className="button" href="http://sherryll-howto-tube.herokuapp.com/">Live Site</a></button>
              <button><a className="button" href="https://github.com/Selliott456/project-4">Code</a></button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div className="project">
      <Fade bottom>
        <div className="mobileColumn">
          <div className="projectImg">
            <div className="carousel-wrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <img src={devmaps1} />
                </div>
                <div>
                  <img src={devmaps2} />
                </div>
                <div>
                  <img src={devmaps3} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="projectBlurb">
            <h2>Devs.Map</h2>
            <h4>React | Sass | Node.js | MongoDB | Heroku | Socket.io </h4>
            <p>This was a group project completed in one week. We designed this fullstack
            application as a mix of a travel blog and dating site for developers on the move to
            link up for collaborations and use our chat function to have conversations
            online.<br></br><br></br>
            I was responsible for building the chatroom using socket.io and creating the basic
            layout of the pages on the frontend.
            </p>
            <div className="buttons">
              <button><a className="button" href="https://still-river-70995.herokuapp.com">Live Site</a></button>
              <button><a className="button" href="https://github.com/Selliott456/project-3">Code</a></button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div className="project">
      <Fade bottom>
        <div className="mobileColumn">
          <div className="projectImg">
            <div className="carousel-wrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <img src={pizza1} />
                </div>
                <div>
                  <img src={pizza2} />
                </div>
                <div>
                  <img src={pizza3} />
                </div>
                <div>
                  <img src={pizza4} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="projectBlurb">
            <h2>You Want A Pizza Me?</h2>
            <h4>React | JSX | CSS</h4>
            <p>This was a pair project completed in 48 hours. We used the Just Eat API
            and postcodes.io to create a marketable project which allowed users to look
            through restaurants in their area. The API allowed us to populate our pages
            with information such as cuisines, addresses, order details and ratings.
            </p>
            <div className="buttons">
              <button><a className="button" href="https://prodigresser.github.io/project-2/">Live Site</a></button>
              <button><a className="button" href="https://github.com/Selliott456/project-2">Code</a></button>
            </div>
          </div>

        </div>
      </Fade>
    </div>
    <div className="project">
      <Fade bottom>
        <div className="mobileColumn">
          <div className="projectImg">
            <div className="carousel-wrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <img src={cher1} />
                </div>
                <div>
                  <img src={cher2} />
                </div>
                <div>
                  <img src={cher3} />
                </div>
                <div>
                  <img src={cher4} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="projectBlurb">
            <h2>Help Cher Turn Back Time</h2>
            <h4>HTML | CSS | Javascript</h4>
            <p>This was a solo project completed in one week.
            It was my own diva-laden take on the famous Space Invaders .
            Play along and shoot CDs at the approaching clocks. Avoid
            the cannon balls from the USS Missouri - the set of one of
            the most iconic Cher videos of all time!
            </p>
            <div className="buttons">
              <button><a className="button" href="https://selliott456.github.io/Project-one/ ">Live Site</a></button>
              <button><a className="button" href="https://github.com/Selliott456/Project-one">Code</a></button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </main>
}

export default Projects