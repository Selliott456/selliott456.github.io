import React from 'react'
import { Fade } from 'react-reveal'
import email from '../styles/email.png'
import github from '../styles/github.png'
import linked from '../styles/linked.png'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'


const Hero = () => {
  return <main>
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="heroTitle" ><Typist>Sherryll Elliott</Typist></h1>
        <h3 className="heroSub">Software Engineer</h3>
        <p className="heroSub">London, UK</p>
        <nav className="icons">
          <Fade bottom>
            <a className="footerIcon" href="mailto:sherryllelliott@gmail.com"><img className="footerImage" src={email} alt="email icon"></img></a>
            <a className="footerIcon" href="https://github.com/Selliott456"><img className="footerImage" src={github} alt="github icon"></img></a>
            <a className="footerIcon" href="https://www.linkedin.com/in/sherryll-elliott-b41b6b15a/"><img className="footerImage" src={linked} alt="linkedIn icon"></img></a>
          </Fade>
        </nav>
      </div>
    </div>

  </main>
}

export default Hero