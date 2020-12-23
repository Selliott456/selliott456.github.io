import React from 'react'
import section from '../styles/section.png'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio } from 'react-icons/di'
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiBabel, SiSocketDotIo } from 'react-icons/si'
import { IoAccessibilityOutline } from 'react-icons/io5'


const Skills = () => {
  return <main className="mainSkills">
    <h1>Skills</h1>
    <div className="skillsSection">
      {/* <img className="sectionImage" src={section}></img> */}
      <div className="skillsIcons">
        <div className="skillBadge">
          <DiJsBadge size={40} />
          <p>JavaScript</p>
        </div>
        <div className="skillBadge">
          <DiHtml5  size={40}/>
          <p>HTML</p>
        </div>
        <div className="skillBadge">
          <DiCss3 size={40}/>
          <p>CSS</p>
        </div>
        <div className="skillBadge">
          <DiSass size={40}/>
          <p>Sass</p>
        </div>
        <div className="skillBadge">
          <DiReact size={40}/>
          <p>React</p>
        </div>
        <div className="skillBadge">
          <DiNodejsSmall size={40}/>
          <p>Node.js</p>
        </div>
        <div className="skillBadge">
          <DiNpm size={40}/>
          <p>NPM</p>
        </div>
        <div className="skillBadge">
          <SiBabel size={40}/>
          <p>Babel</p>
        </div>
        <div className="skillBadge">
          <DiMongodb size={40}/>
          <p>MongoDB</p>
        </div>
        <div className="skillBadge">
          <DiPython size={40}/>
          <p>Python</p>
        </div>
        <div className="skillBadge">
          <SiFlask size={40}/>
          <p>Flask</p>
        </div>
        <div className="skillBadge">
          <SiPostgresql size={40}/>
          <p>PostgreSQL</p>
        </div>
        <div className="skillBadge">
          <DiVisualstudio size={40}/>
          <p>VS Code</p>
        </div>
        <div className="skillBadge">
          <DiGit size={40}/>
          <p>Git</p>
        </div>
        <div className="skillBadge">
          <DiGithubBadge size={40}/>
          <p>GitHub</p>
        </div>
        <div className="skillBadge">
          <DiTerminal size={40}/>
          <p>CLI</p>
        </div>
        <div className="skillBadge">
          <SiHeroku size={40}/>
          <p>Heroku</p>
        </div>
        <div className="skillBadge">
          <SiNetlify size={40}/>
          <p>Netlify</p>
        </div>
        <div className="skillBadge">
          <IoAccessibilityOutline size={40}/>
          <p>Accessibility</p>
        </div>
        <div className="skillBadge">
          <SiSocketDotIo size={40} color="red" />
          <p>Socket.Io</p>
        </div>
      </div>
    </div>
  </main>
}

export default Skills