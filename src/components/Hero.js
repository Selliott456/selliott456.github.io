import React from 'react'
import hero from '../styles/hero.png'
import Zoom from 'react-reveal'


const Hero = () => {
  return <main>
    <Zoom delay={4000}>
      <img className="hero" src={hero}></img>
    </Zoom>
  </main>
}

export default Hero