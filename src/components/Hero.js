import React from 'react'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'


const Hero = () => {
  return <main id="heroMain">
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="heroTitle" ><Typist>Sherryll Elliott</Typist></h1>
        <h3 className="heroSub">Software Engineer</h3>
        <p className="heroSub">London, UK</p>
      </div>
    </div>
  </main>
}

export default Hero