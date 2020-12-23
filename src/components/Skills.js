import React from 'react'
import section from '../styles/section.png'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio } from 'react-icons/di'
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiSlack, SiZoom, SiBabel } from 'react-icons/si'
import { IoAccessibilityOutline } from 'react-icons/io5'


const Skills = () => {
  return <main className="mainSkills">
    <h1>Skills</h1>
    <div className="skillsSection">
      <img className="sectionImage" src={section}></img>
      <div className="skillsIcons">
      <div>
          <DiJsBadge />
          <p>JavaScript</p>
        </div>
        <div>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <DiSass />
          <p>Sass</p>
        </div>
        <div>
          <DiReact />
          <p>React</p>
        </div>
        <div>
          <DiNodejsSmall />
          <p>Node.js</p>
        </div>
        <div>
          <DiNpm />
          <p>NPM</p>
        </div>
        <div>
          <SiBabel />
          <p>Babel</p>
        </div>
        <div>
          <DiMongodb />
          <p>MongoDB</p>
        </div>
        <div>
          <DiPython />
          <p>Python</p>
        </div>
        <div>
          <SiFlask />
          <p>Flask</p>
        </div>
        <div>
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div>
          <DiVisualstudio />
          <p>VS Code</p>
        </div>
        <div>
          <DiGit />
          <p>Git</p>
        </div>
        <div>
          <DiGithubBadge />
          <p>GitHub</p>
        </div>
        <div>
          <DiTerminal />
          <p>CLI</p>
        </div>
        <div>
          <SiHeroku />
          <p>Heroku</p>
        </div>
        <div>
          <SiNetlify />
          <p>Netlify</p>
        </div>
        <div>
          <IoAccessibilityOutline />
          <p>Accessibility</p>
        </div>
        <div>
          <DiResponsive />
          <p>Responsive Design</p>
        </div>
      </div>
    </div>
  </main>
}

export default Skills