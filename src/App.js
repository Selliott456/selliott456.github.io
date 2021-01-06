import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

import './styles/style.scss'

const App = () => {
  return <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </main>
}

export default App