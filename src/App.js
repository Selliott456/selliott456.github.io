import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

import './styles/style.scss'

const App = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/About" component={About} />
      <Route exact path="/Skills" component={Skills} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/" component={Hero} />
    </Switch>
  </BrowserRouter>

  return <main>
   
    <Hero />
    <NavBar />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </main>
}

export default App