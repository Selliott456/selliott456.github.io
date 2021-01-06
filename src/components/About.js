import React from 'react'
import me from '../styles/me.png'

const About = () => {
  return <main className="about">
    <h1>About</h1>
    <div className="aboutText">
      <img className="me" src={me} alt="profile photo"></img>
      <p className="aboutParagraph">
        For 15 years or so (read the glorious era of my 20s where my knees didn’t complain)
        I was teaching Physics to 11-18 year olds. I am now a full stack developer with
        experience in a range of technologies who enjoys making beautifully crafted, user-friendly software.
      </p>
    </div>
  </main>
}

export default About