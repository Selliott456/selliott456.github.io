import React from 'react'
import projects from '../styles/projects.png'
import projectOne from '../styles/projectOne.png'
import projectTwo from '../styles/projectTwo.png'
import projectThree from '../styles/projectThree.png'
import projectFour from '../styles/projectFour.png'
import Fade from 'react-reveal/Fade';


const Projects = () => {
  return <main className="projectsMain">
    <img className="sprayTitle" src={projects} alt="projects"></img>
    <div className="project">
      <Fade bottom>
        <div className="mobileColumn">
          <img className="projectImg" src={projectTwo} alt="project 2 image"></img>
          <div className="projectBlurb">
            <h2>You Want A Pizza Me?</h2>
            <h4>React | JSX | CSS</h4>
            <p>This was a pair project completed in 48 hours. We used the Just Eat API
            and postcodes.io to create a marketable project which allowed users to look
            through restaurants in their area. The API allowed us to populate our pages
            wth information such as cuisines, addresses, order details and ratings.
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
          <img className="projectImg" src={projectThree} alt="project 3 image"></img>
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
          <img className="projectImg" src={projectFour} alt="project 4 image"></img>
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
          <img className="projectImg" src={projectOne} alt="project 1 image"></img>
          <div className="projectBlurb">
            <h2>Help Cher Turn Back Time</h2>
            <h4>HTML | CSS | Javascript</h4>
            <p>This was a solo project completed in one week
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