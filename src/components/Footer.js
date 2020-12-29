import React from 'react'
import email from '../styles/email.png'
import github from '../styles/github.png'
import linked from '../styles/linked.png'
const Footer = () => {

  return <main className="mainFooter">
    <div className="icons">
      <a className="footerIcon" href="mailto:sherryllelliott@gmail.com?"><img className="footerImage" src={email} alt="emai Icon"></img></a>
      <a className="footerIcon" href="https://github.com/Selliott456"><img className="footerImage" src={github} alt="github Icon"></img></a>
      <a className="footerIcon" href="https://www.linkedin.com/in/sherryll-elliott-b41b6b15a/"><img className="footerImage" src={linked} alt="LinkedIn Icon"></img></a>
    </div>
  </main>
}

export default Footer