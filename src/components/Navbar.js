import React from 'react'
import logo from '../styles/logo.png'

const NavBar = () => {


  return <main className="navMain">
    <header>
      <nav id="webNav">
        {/* <img id="logo" src={logo}></img> */}
        <ul>
          <li className="navList"><a href="/About">About</a></li>
          <li className="navList"><a href="/Skills">Skills</a></li>
          <li className="navList"><a href="/Projects">Projects</a></li>
          <li className="navList"><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </main>
}

export default NavBar