import React from 'react'
import email from '../styles/email.png'
import github from '../styles/github.png'
import linked from '../styles/linked.png'
// import logo from '../styles/logo.png'

const NavBar = () => {


  return <main className="navMain">
    <div id="webNav">
      <nav className="icons">
        <a className="footerIcon" href="mailto:sherryllelliott@gmail.com?"><img className="footerImage" src={email}></img></a>
        <a className="footerIcon" href="https://github.com/Selliott456"><img className="footerImage" src={github}></img></a>
        <a className="footerIcon" href="https://www.linkedin.com/in/sherryll-elliott-b41b6b15a/"><img className="footerImage" src={linked}></img></a>
      </nav>
    </div>
  </main>
}

export default NavBar