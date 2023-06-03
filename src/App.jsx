import React from 'react'
import MainLayouts from './components/Layouts/main.layouts'
import Home from './components/Pages/home.pages'
import About from './components/Pages/about.pages'
import Project from './components/Pages/project.pages'
import Contact from './components/Pages/contact.pages'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <MainLayouts>
        {/* <Router>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Project />} path='project' />
            <Route element={<Contact />} path='contact' />
          </Routes>
        </Router> */}
        <Home />
        <About />
        <Project />
        <Contact />
      </MainLayouts>
    </>
  )
}

export default App
