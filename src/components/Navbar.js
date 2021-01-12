import React from 'react'
import { Fade } from 'react-reveal'


const Navbar = () => {
  return <main className="navMain">
    <Fade bottom>
      <nav id="nav">
        <a className="navItem" href="#mainAbout">About</a>
        <a className="navItem" href="#projectsMain">Projects</a>
        <a className="navItem" href="#contactMain">Contact</a>
      </nav>
    </Fade>
  </main>
}

export default Navbar