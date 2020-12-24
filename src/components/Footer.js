import React from 'react'
import logo from '../styles/logo.png'
import email from '../styles/email.png'
import github from '../styles/github.png'
import linked from '../styles/linked.png'
const Footer = () => {
  
  return <main className="mainFooter">
    <a href="/"><img className="footerImage" src={logo}></img></a>
    <a href="mailto:sherryllelliott@gmail.com?"><img className="footerImage" src={email}></img></a>
    <a href="https://github.com/Selliott456"><img className="footerImage" src={github}></img></a>
    <a href="https://www.linkedin.com/in/sherryll-elliott-b41b6b15a/"><img className="footerImage" src={linked}></img></a>
  </main>
}

export default Footer