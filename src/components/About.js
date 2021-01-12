import React from 'react'
import me from '../styles/me.png'
import email from '../styles/email.png'
import github from '../styles/github.png'
import linked from '../styles/linked.png'

const About = () => {
  return <main id="mainAbout" className="about">
    <h1>About</h1>
    <div className="aboutText">
      <img className="me" src={me} alt="profile photo"></img>
      <div className="paraIcons">
        <p className="aboutParagraph">
          For 15 years or so (read the glorious era of my 20s where my knees didn’t complain)
          I was teaching Physics to 11-18 year olds. I am now a full stack developer with
          experience in a range of technologies who enjoys making beautifully crafted, user-friendly software.
          <br></br>
          <br></br>
          I am originally from Glasgow, Scotland but have lived and worked in Spain, Luxembourg and London,
          leading teams in ever location! I believe that this is testament to the fact that I have the 
          guts to make bold decisions and the grit to see them through, no matter what culture I am immersed
          in or the language spoken!     
        </p>
        <nav id="icons">
          <a href="mailto:sherryllelliott@gmail.com"><img className="navIcon" src={email} alt="email icon"></img></a>
          <a href="https://github.com/Selliott456"><img className="navIcon" src={github} alt="github icon"></img></a>
          <a href="https://www.linkedin.com/in/sherryll-elliott-b41b6b15a/"><img className="navIcon" src={linked} alt="linkedIn icon"></img></a>
        </nav>
      </div>
    </div>
  </main>
}

export default About