import React from 'react'
import splashRight from '../styles/splashRight.png'
import splashLeft from '../styles/splashLeft.png'

const About = () => {
  return <main className="about">

    <h1> About Me </h1>
    <div className="aboutText">
      <img className="splash" src={splashLeft}></img>
      <p className="aboutParagraph">
        For the 15 years or so (read the glorious era of my 20s where my knees didn’t complain)
      I was teaching Physics to 11-18 year olds.Now I am a full stack developer with 
      experience in a range of technologies who
      enjoys making beautifully crafted, user-friendly software.<br></br><br></br>
      I believe that meaningful software development has the power to change lives and
      uplift communities and I am excited to be able to contribute my skills and point 
      of view to the development community and those it serves.
      </p>
      <img className="splash" src={splashRight}></img>
    </div>
    
  </main>
}

export default About