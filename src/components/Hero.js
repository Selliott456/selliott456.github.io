import React from 'react'
import hero from '../styles/hero.png'
import mobileHero from '../styles/mobileHero.png'
import Zoom from 'react-reveal'


const Hero = () => {
  return <main>
    <Zoom delay={4000}>
      <img className="hero" src={hero}></img>
      <img className="mobileHero" src={mobileHero}></img>
    </Zoom>
  </main>
}

export default Hero