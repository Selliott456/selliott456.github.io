import React from 'react'
import splashRight from '../styles/splashRight.png'
import splashLeft from '../styles/splashLeft.png'
// import section from '../styles/section.png'
const About = () => {
  return <main className="about">

    <h1> About Me </h1>
    <div className="aboutText">
      <img className="splash" src={splashLeft}></img>
      {/* <img className="sectionImage" src={section}></img> */}

      <p className="aboutParagraph">
        For the 15 years or so (read the glorious era of my 20s where my knees didn’t complain)
      I was teaching Physics to 11-18 year olds.<br></br><br></br>
      Now I am a full stack developer with experience in a range of technologies who
      enjoys making beautifully crafted, user-friendly software.
      </p>
      <img className="splash" src={splashRight}></img>
    </div>
  </main>
}

export default About