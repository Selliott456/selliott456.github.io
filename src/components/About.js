import React from 'react'
import splashRight from '../styles/splashRight.png'
import splashLeft from '../styles/splashLeft.png'
import about from '../styles/about.png'
const About = () => {
  return <main className="about">
    <img className="sprayTitle" src={about}></img>
    <div className="aboutText">
      <p className="aboutParagraph">
        For 15 years or so (read the glorious era of my 20s where my knees didn’t complain)
        I was teaching Physics to 11-18 year olds. I am now a full stack developer with
        experience in a range of technologies who enjoys making beautifully crafted, user-friendly software.
      </p>
    </div>
  </main>
}

export default About