import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import "./Home.css"
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Bottom from './components/Bottom';

export default function Home() {
  return (
    <div className='intro_main'>
      <Navbar/>
      <Intro/>
      <About/>
      <center><h1 style={{color: "white"}}>My Skills</h1></center>
      <Skills/>
      
      <center><h1 style={{color: "white"}}>My Projects</h1></center>
      <Projects/>
      <Bottom/>
    </div>
  )
}
