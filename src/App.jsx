import React from 'react'
import MainLayouts from './components/Layouts/main.layouts'
import Home from './components/Pages/home.pages'
import About from './components/Pages/about.pages'
import Project from './components/Pages/project.pages'
import Contact from './components/Pages/contact.pages'

function App() {
  return (
    <>
      <MainLayouts>
        <Home />
        <About />
        <Project />
        <Contact />
      </MainLayouts>
    </>
  )
}

export default App
