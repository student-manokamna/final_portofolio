import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'

const App = () => {
  return (
    <div className="conatiner mx-auto  max-w-7xl">
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    </div>
  )
}

export default App
